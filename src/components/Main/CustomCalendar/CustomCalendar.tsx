import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ISchedule } from './interfaces';
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

  const start = new Date();
  const start1 = new Date(new Date().setDate(start.getDate() + 1));
  const start2 = new Date(new Date().setDate(start.getDate() + 2));
  const start3 = new Date(new Date().setDate(start.getDate() + 3));
  const start4 = new Date(new Date().setDate(start.getDate() + 4));

  const end = new Date(new Date().setDate(start.getDate() + 1));
  const end1 = new Date(new Date().setDate(start1.getDate() + 1));
  const end2 = new Date(new Date().setDate(start2.getDate() + 1));
  const end3 = new Date(new Date().setDate(start3.getDate() + 1));
  const end4 = new Date(new Date().setDate(start4.getDate() + 1));

  const widthPercent = (100 / 7).toString() + '%';

  const schedules: ISchedule[] = [
    {
      eventId: 0,
      userName: '찬우',
      startDay: start,
      endDay: end,
      title: 'textsadadasdasdasdasdadasdasdsadsadas',
    },
    {
      eventId: 0,
      userName: '찬우',
      startDay: start1,
      endDay: end1,
      title: 'text',
    },
    {
      eventId: 0,
      userName: '찬우',
      startDay: start2,
      endDay: end2,
      title: 'text',
    },
    {
      eventId: 0,
      userName: '찬우',
      startDay: start3,
      endDay: end3,
      title: 'text',
    },
    {
      eventId: 0,
      userName: '찬우',
      startDay: start4,
      endDay: end4,
      title: 'text',
    },
  ];

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
    //선택된 달의 날짜들 반환 함수
    const dayArr = [];
    //나중에 컴포넌트로 빼야겠다.
    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      if (week[day] == nowDay) {
        for (let i = 0; i < 7; i++) {
          if (today.date + i > dateTotalCount) {
            dayArr.push(
              <Weekday id={today.date + i - dateTotalCount} width={widthPercent} />
            );
          } else {
            dayArr.push(<Weekday id={today.date + i} width={widthPercent} />);
          }
        }
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  // const CountArr = Array.from({ length: 32 }, () => [false, false, false]);
  // console.log('CountArr', CountArr);
  const ArrRef = useRef(Array.from({ length: 32 }, () => [false, false, false]));
  const returnEvent = useCallback(() => {
    test();
    const CountArr = Array.from({ length: 32 }, () => [false, false, false]);
    const eventArr = schedules.map(item => {
      const blockCount = item.endDay.getDate() - item.startDay.getDate();
      const leftCount = item.startDay.getDate() - selectedDate;
      const leftPercent = (100 / 7) * leftCount + '%';
      const widthPercent = (100 / 7) * (blockCount + 1) + '%';

      let tempValue = 0;
      for (let j = 0; j < 3; j++) {
        if (ArrRef.current[Number(item.startDay.getDate())][j] === false) {
          tempValue = j + 1;
          console.log('tempValue', Number(item.startDay.getDate()), tempValue);
          break;
        }
      }

      const topPercent = (100 / 4) * tempValue + '%';
      console.log('topPercent', topPercent);

      for (let i = 0; i < 3; i++) {
        let isValue = false;
        const newRefArr = [...ArrRef.current];
        for (
          let j = Number(item.startDay.getDate());
          j <= Number(item.endDay.getDate());
          j++
        ) {
          if (newRefArr[j][i] === false) {
            console.log('j', j, i);

            newRefArr[i][j] = true;
            isValue = true;
          }
        }

        if (isValue === true) {
          ArrRef.current = newRefArr;
          break;
        }
      }

      return (
        <StEventBlock top={topPercent} width={widthPercent} left={leftPercent}>
          {item.title}
        </StEventBlock>
      );
    });

    return eventArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  return (
    <StContainer width={width}>
      <StWeekBlock>{returnWeek()}</StWeekBlock>
      <StLine />
      <div style={{ position: 'relative' }}>
        <StDateBlcok>{returnDay()}</StDateBlcok>
        <StEventContainer>{returnEvent()}</StEventContainer>
      </div>
    </StContainer>
  );
};

export default CustomCalendar;

function test() {
  const testCountArr = Array.from({ length: 32 }, () => [false, false, false]);
  console.log('testCountArr', testCountArr);
  testCountArr[25][1] = true;
  console.log('testCountArr', testCountArr);
}
