import React from 'react';
import { StDeviderBlock, StVacationTabBlock } from './style';
import Vacation from './Vacation/Vacation';
import { useGetVacations } from '../../api/hooks/Vacation/useGetVacation';
import { VacationList } from './interfaces';

const VacationTab = () => {
  const { vacations, vacationsIsLoading } = useGetVacations();
  console.log('vacations--------', vacations);

  if (vacationsIsLoading && !vacations) {
    return <div>Loading...</div>;
  }
  return (
    <StVacationTabBlock>
      🏖️
      <StDeviderBlock />
      {vacations.map((vacation: VacationList) => {
        return (
          <Vacation
            key={vacation.eventId}
            type={vacation.typeDetail}
            userName={vacation.userName}
            startDay={vacation.startDay}
            endDay={vacation.endDay}
            status={vacation.status}
          />
        );
      })}
    </StVacationTabBlock>
  );
};

export default VacationTab;
