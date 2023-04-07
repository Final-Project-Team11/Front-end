import React from 'react';
import { StDeviderBlock, StVacationTabBlock } from './style';
import Vacation from './Vacation/Vacation';

const VacationTab = () => {
  return (
    <StVacationTabBlock>
      🏖️
      <StDeviderBlock />
      <Vacation title="연차" userName="송철환" startDay="오늘" endDay="내일" />
      <Vacation title="반차" userName="최다현" startDay="4.10" endDay="4.13" />
      <Vacation title="연차" userName="송철환" startDay="4.15" endDay="4.17" />
    </StVacationTabBlock>
  );
};

export default VacationTab;
