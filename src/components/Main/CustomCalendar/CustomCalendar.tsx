import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ISchedule, IWeeklyInfo } from './interfaces';
import {
  StWeek,
  StContainer,
  StWeekBlock,
  StDateBlcok,
  StLine,
  StEventBlock,
  StEventContainer,
} from './styles';
import Weekday from './Weekday';
import useGetWeeklyInfo from '../../../api/hooks/Weekly/useGetWeeklyInfo';
import { is } from 'cheerio/lib/api/traversing';
import { getScheduleColor } from '../../../pages/SubMain/utils';

interface CalendarProps {
  width: string;
}

const CustomCalendar = (props: CalendarProps) => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const width = props.width.split('px')[0];

  const { data, isLoading } = useGetWeeklyInfo();
  const widthPercent = (100 / 7).toString() + '%';

  const issue: IWeeklyInfo[] = data?.issue?.map((item: IWeeklyInfo) => {
    const start = new Date(item.start);
    const end = new Date(item.end);

    return { ...item, start: start, end: end };
  });
  const other: IWeeklyInfo[] = data?.other?.map((item: IWeeklyInfo) => {
    const start = new Date(item.start);
    const end = new Date(item.end);

    return { ...item, start: start, end: end };
  });
  const schedule: IWeeklyInfo[] = data?.schedule?.map((item: IWeeklyInfo) => {
    const start = new Date(item.start);
    const end = new Date(item.end);

    return { ...item, start: start, end: end };
  });
  const meeting: IWeeklyInfo[] = data?.meeting?.map((item: IWeeklyInfo) => {
    const start = new Date(item.start);
    const end = new Date(item.end);

    return { ...item, start: start, end: end };
  });

  const events: IWeeklyInfo[] = [];
  issue !== undefined && events.push(...issue);
  other !== undefined && events.push(...other);
  schedule !== undefined && events.push(...schedule);
  meeting !== undefined && events.push(...meeting);

  const week = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT']; //일주일
  const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); // 현재 선택된 달
  const [selectedDate, setSelectedDate] = useState(today.date);

  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); //선택된 연도, 달의 마지막 날짜

  //이전달 선택

  const returnWeek = useCallback(() => {
    //요일 반환 함수
    const weekArr: any[] = [];

    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, today.date).getDay();
      if (week[day] == nowDay) {
        for (let i = 0; i < 7; i++) {
          weekArr.push(
            <StWeek key={i} width={widthPercent}>
              {week[(day + i) % 7]}
            </StWeek>
          );
        }
      }
    }

    return weekArr;
  }, []);

  const returnDay = useCallback(() => {
    // 선택된 달의 날짜들 반환 함수
    const dayArr = [];
    // 나중에 컴포넌트로 빼야겠다.
    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      if (week[day] == nowDay) {
        for (let i = 0; i < 7; i++) {
          const dateValue =
            today.date + i > dateTotalCount
              ? today.date + i - dateTotalCount
              : today.date + i;
          if (today.date + i > dateTotalCount) {
            dayArr.push(
              <Weekday key={`weekday-${dateValue}`} id={dateValue} width={widthPercent} />
            );
          } else {
            dayArr.push(
              <Weekday key={`weekday-${dateValue}`} id={dateValue} width={widthPercent} />
            );
          }
        }
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  const ArrRef = useRef(Array.from({ length: 32 }, () => [false, false, false]));

  interface Position {
    top: number;
    left: number;
    width: number;
    height: number;
  }
  console.log(events);

  const returnEvent = useCallback(() => {
    const calendarDays = Array.from({ length: 32 }, () => [false, false, false]);
    const positions: Position[] = [];

    const resultArr = [];

    for (let i = 0; i < events.length; i++) {
      const value = events[i].end.getDate() - events[i].start.getDate();
      const blockCount = value >= 0 ? value : Number(dateTotalCount + value);

      for (let view = 0; view < 3; view++) {
        const day = events[i].start.getDate();

        if (calendarDays[day][view] === false) {
          for (let i = 0; i < blockCount + 1; i++) {
            calendarDays[day + i][view] = true;
          }

          const top = (100 / 4) * (view + 1) + '%';
          const leftValue = events[i].start.getDate() - selectedDate;
          const leftCount = leftValue >= 0 ? leftValue : leftValue + dateTotalCount;
          const leftPercent = (100 / 7) * leftCount + 0.35 + '%';
          const widthPercent = (100 / 7) * (blockCount + 1) - 2 + '%';
          const backgroundColor = getScheduleColor(false, events[i].calendarId);

          resultArr.push(
            <StEventBlock
              key={`eventblock-${i}`}
              top={top}
              width={widthPercent}
              left={leftPercent}
              backgroundColor={backgroundColor}
            >
              {events[i].title}
            </StEventBlock>
          );
          break;
        }
      }
    }

    return resultArr;
  }, [selectedYear, selectedMonth, events]);

  return (
    <StContainer width={width}>
      <StWeekBlock>{returnWeek()}</StWeekBlock>
      <StLine />
      <div style={{ position: 'relative' }}>
        <StDateBlcok>{returnDay()}</StDateBlcok>
        {data !== undefined && <StEventContainer>{returnEvent()}</StEventContainer>}
      </div>
    </StContainer>
  );
};

export default CustomCalendar;
