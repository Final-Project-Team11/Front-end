import React, { useCallback, useRef, useState } from 'react';
import { ISchedule } from './interfaces';
import {
  Styear,
  StMonth,
  StTitleDateBlock,
  StWeek,
  StWeekdayBlock,
  StContainer,
  StTitle,
  Stpagination,
  StWeekBlock,
  StDateBlcok,
} from './styles';
import Weekday from './Weekday';

const Calendar = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const start = new Date();
  const end = new Date(new Date().setDate(start.getDate() + 5));

  const schedules: ISchedule[] = [
    {
      eventId: 0,
      userName: '찬우',
      startDay: start,
      endDay: end,
      title: 'text',
    },
    {
      eventId: 2,
      userName: '우찬',
      startDay: start,
      endDay: end,
      title: 'text',
    },
  ];

  const week = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT']; //일주일
  const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); // 현재 선택된 달

  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); //선택된 연도, 달의 마지막 날짜

  //이전달 선택
  const preMonth = useCallback(() => {
    //이전 달 보기 보튼
    if (selectedMonth == 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 12);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth]);

  const nextMonth = useCallback(() => {
    //다음달 보기 버튼
    if (selectedMonth == 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  const monthControl = useCallback(() => {
    //달 선택 박스 고르기

    const monthArr = [];
    for (let i = 0; i < 12; i++) {
      monthArr.push(
        <option key={i + 1} value={i + 1}>
          {i + 1} 월
        </option>
      );
    }

    return (
      <select value={selectedMonth} onChange={changeSelectMonth}>
        {monthArr}
      </select>
    );
  }, [selectedMonth]);

  const changeSelectMonth = (e: any) => {
    setSelectedMonth(Number(e.target.value));
  };
  const changeSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value));
    console.log(Number(e.target.value));
  };

  const yearControl = useCallback(() => {
    //연도 선택박스에서 고르기
    const yearArr = [];
    const startYear = today.year - 10; //현재 년도부터 10년전 까지만
    const endYear = today.year + 10; //현재 년도부터 10년 후까지만

    for (let i = startYear + 1; i < endYear + 1; i++) {
      yearArr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return (
      <select className="yearSelect" onChange={changeSelectYear} value={selectedYear}>
        {yearArr}
      </select>
    );
  }, [selectedYear]);

  const returnWeek = useCallback(() => {
    //요일 반환 함수
    const weekArr: any[] = [];

    week.forEach(v => {
      weekArr.push(<StWeek key={v}>{v}</StWeek>);
    });

    return weekArr;
  }, []);

  const returnDay = useCallback(() => {
    //선택된 달의 날짜들 반환 함수
    const dayArr = [];
    //나중에 컴포넌트로 빼야겠다.
    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      if (week[day] == nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(<Weekday id={i} schedules={schedules} />);
        }
      } else {
        dayArr.push(<StWeekdayBlock></StWeekdayBlock>);
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  return (
    <StContainer>
      <StTitle>
        <StTitleDateBlock>
          <Styear>
            <div>{today.year.toString().split('').splice(0, 2)}</div>
          </Styear>
          <StMonth>
            <div style={{ marginRight: '10px' }}>
              {selectedYear.toString().split('').splice(2, 4)}
            </div>
            /{selectedMonth.toString().padStart(2, '0')}
          </StMonth>
        </StTitleDateBlock>
        <Stpagination>
          <button onClick={preMonth}>◀︎</button>
          <button onClick={nextMonth}>▶︎</button>
        </Stpagination>
      </StTitle>
      <StWeekBlock>{returnWeek()}</StWeekBlock>
      <StDateBlcok>{returnDay()}</StDateBlcok>
    </StContainer>
  );
};

export default Calendar;
