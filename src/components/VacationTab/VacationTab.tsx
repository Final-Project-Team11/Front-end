import React, { useRef } from 'react';
import Vacation from './Vacation/Vacation';
import { useGetVacation } from '../../api/hooks/Vacation/useGetVacation';
import { VacationList } from './interfaces';
import Board from '../Board/Board';
import CalendarIcon from '../../assets/Icons/CalendarIcon';
import { useInfiniteQueryHook } from '../../hooks/common/useInfiniteQueryHook';

const VacationTab = () => {
  // Vacation 리스트 GET 요청
  const { data, fetchNextPage, hasNextPage } = useGetVacation();

  // 무한스크롤 적용할 div 지정
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 무한스크롤 커스텀 훅
  useInfiniteQueryHook({ targetDiv, fetchNextPage, hasNextPage });

  // 원본배열 유지하며 새로운 데이터 추가
  const vacations = data ? data.pages.flatMap(page => page.vacation) : [];

  if (!vacations) {
    return <h1>....loading</h1>;
  }

  // props 로 내려줄 아이콘
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
