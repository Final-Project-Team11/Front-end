import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import Vacation from './Vacation/Vacation';
import { useGetVacation } from '../../api/hooks/Vacation/useGetVacation';
import { VacationList } from './interfaces';

const VacationTab = () => {
  // Vacation 리스트 GET 요청
  const { data, fetchNextPage, hasNextPage } = useGetVacation();

  // 무한스크롤 적용할 div 지정
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 무한스크롤 function
  const handleScroll = () => {
    const container = targetDiv.current;

    if (container) {
      const scrollHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  // 스크롤이벤트 등록
  useEffect(() => {
    const container = targetDiv.current;

    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  // 원본배열 유지하며 새로운 데이터 추가
  const vacations = data
    ? data.pages.reduce<VacationList[]>(
        (acc, page) => [...acc, ...(page.vacation as VacationList[])],
        []
      )
    : [];

  if (!vacations) {
    return <h1>....loading</h1>;
  }

  return (
    <UI.StTabBlock>
      <UI.StIconBlock>
        {/* 아이콘 */}
        <svg viewBox="0 0 146.01 117.08" width="20px" height="20px">
          <path
            fill="#87acd7"
            d="M131.2,15.46h-58.65S58.09,0,58.25,0H14.29C6.4,0,0,6.4,0,14.29L.16,102.27c0,8.18,6.63,14.81,14.81,14.81h116.22c8.18,0,14.81-6.63,14.81-14.81V30.27c0-8.18-6.63-14.81-14.81-14.81Z"
          />
        </svg>
        <UI.StTitleSpan>휴가 요청</UI.StTitleSpan>
      </UI.StIconBlock>
      <UI.StDivederHr />
      <UI.StInsideBlock ref={targetDiv}>
        {vacations?.map((vacation: VacationList) => {
          return <Vacation key={vacation.eventId} vacation={vacation} />;
        })}
      </UI.StInsideBlock>
    </UI.StTabBlock>
  );
};

export default VacationTab;
