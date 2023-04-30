import React from 'react';
import { WeekdayProps } from './inferfaces';
import { StWeekdayBlock, StScheduleblock, StSpan } from './styles';

function Weekday(props: WeekdayProps) {
  return (
    <StWeekdayBlock width={props.width}>
      <StSpan>{props.id}</StSpan>
    </StWeekdayBlock>
  );
}

export default Weekday;
