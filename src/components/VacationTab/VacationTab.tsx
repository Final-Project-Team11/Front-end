import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import Vacation from './Vacation/Vacation';
import { useGetVacation } from '../../api/hooks/Vacation/useGetVacation';
import { VacationList } from './interfaces';
import Board from '../Board/Board';
import CalendarIcon from '../../assets/Icons/CalendarIcon';
import { COLOR } from '../../styles/colors';

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

  // props 로 내려줄 아이콘
  const icon = <CalendarIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;

  return (
    <Board icon={icon} title="휴가 요청">
      <UI.StInsideBlock ref={targetDiv}>
        {vacations?.map((vacation: VacationList) => {
          return <Vacation key={vacation.eventId} vacation={vacation} />;
        })}
      </UI.StInsideBlock>
    </Board>
  );
};

export default VacationTab;
