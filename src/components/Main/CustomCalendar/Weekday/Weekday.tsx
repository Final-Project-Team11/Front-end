import React from 'react';
import { WeekdayProps } from './inferfaces';
import { StWeekdayBlock, StScheduleblock } from './styles';

function Weekday(props: WeekdayProps) {
  return (
    <StWeekdayBlock>
      {props.id + 1}
      {props.schedules?.map(schedule => {
        if (schedule.startDay.getDate() === props.id) {
          return (
            <StScheduleblock
              isStart={true}
              backgroundColor="tomato"
              key={schedule.eventId}
            >
              {schedule.userName}
            </StScheduleblock>
          );
        } else if (schedule.endDay.getDate() === props.id) {
          return (
            <StScheduleblock
              isEnd={true}
              backgroundColor="tomato"
              key={schedule.eventId}
            />
          );
        } else if (
          schedule.startDay.getDate() <= props.id &&
          schedule.endDay.getDate() >= props.id
        ) {
          return <StScheduleblock backgroundColor="tomato" key={schedule.eventId} />;
        }
      })}
    </StWeekdayBlock>
  );
}

export default Weekday;
