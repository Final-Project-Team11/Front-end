import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import Vacation from './Vacation/Vacation';
import { useGetVacation } from '../../api/hooks/Vacation/useGetVacation';
import { VacationList } from './interfaces';

const VacationTab = () => {
  const { data, fetchNextPage, hasNextPage } = useGetVacation();

  const targetDiv = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const container = targetDiv.current;

    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

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
    <UI.StVacationTabBlock>
      🏖️
      <UI.StDeviderBlock />
      <UI.StInsideBlock ref={targetDiv}>
        {vacations?.map((vacation: VacationList) => {
          return <Vacation key={vacation.eventId} vacation={vacation} />;
        })}
      </UI.StInsideBlock>
    </UI.StVacationTabBlock>
  );
};

export default VacationTab;
