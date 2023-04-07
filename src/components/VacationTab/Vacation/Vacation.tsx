import React from 'react';
import { StPermissionBlock, StSpanBlock, StVacateBlock, StVacateSpan } from './style';
import { VacateProps } from './interfaces';

const Vacation = ({
  eventId,
  userName,
  title,
  file,
  startDay,
  endDay,
  status,
  children,
}: VacateProps) => {
  return (
    <StVacateBlock>
      <StSpanBlock>
        <StVacateSpan>{`${title} | ${userName}`}</StVacateSpan>
        <StVacateSpan>{`기간 | ${startDay} ~ ${endDay}`}</StVacateSpan>
      </StSpanBlock>
      <StPermissionBlock />
    </StVacateBlock>
  );
};

export default Vacation;
