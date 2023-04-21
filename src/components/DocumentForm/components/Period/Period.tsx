import React from 'react';
import styled from 'styled-components';

interface PeriodProps {
  startDay?: Date;
  endDay?: Date;
}

const Period = ({ startDay, endDay }: PeriodProps) => {
  return (
    <StPeriodBlock>
      <span>{startDay?.getFullYear()}</span>
      <span>/</span>
      <span>{startDay && startDay?.getMonth() + 1}</span>
      <span>/</span>
      <span>{startDay?.getDate()}</span>
      {Number(endDay?.getDate()) - Number(startDay?.getDate()) > 0 && (
        <>
          <span>-</span>
          <span>{endDay?.getFullYear()}</span>
          <span>/</span>
          <span>{endDay && endDay?.getMonth() + 1}</span>
          <span>/</span>
          <span>{endDay?.getDate()}</span>
        </>
      )}
    </StPeriodBlock>
  );
};

export default Period;

const StPeriodBlock = styled.div`
  display: flex;
  gap: 3px;
  font-weight: bold;
`;
