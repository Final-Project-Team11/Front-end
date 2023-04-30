import React, { useRef } from 'react';
import Vacation from './Vacation/Vacation';
import { PageData, useGetVacation } from '../../api/hooks/Vacation/useGetVacation';
import { VacationList } from './interfaces';
import Board from '../Board/Board';
import CalendarIcon from '../../assets/Icons/CalendarIcon';
import { useInfiniteQueryHook } from '../../hooks/common/useInfiniteQueryHook';

const VacationTab = () => {
  // Vacation 리스트 GET 요청
  const { data, fetchNextPage, hasNextPage } = useGetVacation();

  // 무한스크롤을 적용할 div를 타겟하기 위해 추가한 useRef
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 무한스크롤 커스텀훅
  useInfiniteQueryHook<PageData>({ targetDiv, fetchNextPage, hasNextPage });

  // data.pages를 풀어서 하나의 배열로 -> useInfiniteQuery 에서 return 하는 data 형식 참고.
  const vacations = data ? data.pages.flatMap(page => page.vacation) : [];

  if (!vacations) {
    return <h1>....loading</h1>;
  }

  // Board title에 들어갈 icon
  const icon = <CalendarIcon usage="title" />;

  return (
    <Board icon={icon} title="휴가 요청" targetDiv={targetDiv}>
      {vacations?.map((vacation: VacationList) => {
        return <Vacation key={vacation.Id} vacation={vacation} />;
      })}
    </Board>
  );
};

export default VacationTab;
