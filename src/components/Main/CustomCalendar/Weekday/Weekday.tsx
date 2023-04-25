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

// function Weekday(props: WeekdayProps) {
//   const maxViewSchedule = 3;
//   return (
//     <StWeekdayBlock width={props.width}>
//       <StSpan>{props.id + 1}</StSpan>
//       {props.schedules?.map(schedule => {
//         const blockCount = schedule.endDay.getDate() - schedule.startDay.getDate();
//         console.log('blockCount', blockCount);
//         if (schedule.startDay.getDate() === props.id) {
//           return (
//             <StScheduleblock
//               width={props.width}
//               isStart={true}
//               backgroundColor="tomato"
//               key={schedule.eventId}
//             >
//               <span>{schedule.startDay.getHours().toString().padStart(2, '0')}</span>
//               <span>:</span>
//               <span>{schedule.startDay.getMinutes().toString().padStart(2, '0')}</span>
//               <span>{schedule.userName}</span>
//               <span>{schedule.title}</span>
//             </StScheduleblock>
//           );
//         } else if (schedule.endDay.getDate() === props.id) {
//           return (
//             <StScheduleblock
//               isEnd={true}
//               backgroundColor="tomato"
//               key={schedule.eventId}
//             />
//           );
//         } else if (
//           schedule.startDay.getDate() <= props.id &&
//           schedule.endDay.getDate() >= props.id
//         ) {
//           return <StScheduleblock backgroundColor="tomato" key={schedule.eventId} />;
//         }
//       })}
//     </StWeekdayBlock>
//   );
// }

/**
 *
 * 1. 시작일을 비교해서 빠른 날짜순으로 정렬한다.
 * 2. 날짜에 따라 블록 count수를 정한다?
 *
 */
