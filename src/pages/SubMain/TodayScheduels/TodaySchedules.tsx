import React, { useContext } from 'react';
import { CalendarContext } from '../../Main/Main';
import styled from 'styled-components';
import { COLOR } from '../../../constants/colors';
import { start } from 'repl';

interface StylesProps {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
}
interface TodaysProps {
  todayData?: number;
}

const TodaySchedules = (props: TodaysProps) => {
  const schedules = useContext(CalendarContext);
  const today = props.todayData ? props.todayData : new Date().getDate();

  const filterSchedules = schedules?.filter(item => {
    const startDay = new Date(item.start);
    const endDay = new Date(item.end);
    return startDay.getDate() <= today && endDay.getDate() >= today;
  });

  return (
    <StWrap>
      <StContainer>
        <h1>today work's</h1>
        {filterSchedules?.map(item => {
          const startDay = new Date(item.start);
          return (
            <StScheduleBlock>
              <StMarkBlock backgroundColor={item.backgroundColor} />
              <StBlock>
                <span>{startDay.getFullYear()}</span>
                <span>/</span>
                <span>{startDay.getMonth().toString().padStart(2, '0')}</span>
                <span>/</span>
                <span>{startDay.getDate()}</span>
              </StBlock>
              <StBlock>
                <span>{startDay.getHours()}:</span>
                <span>{startDay.getMinutes().toString().padStart(2, '0')}</span>
              </StBlock>
              <StBlock>
                <span>{item.userName}</span>
              </StBlock>
              <StBlock>
                <span>{item.title}</span>
              </StBlock>
            </StScheduleBlock>
          );
        })}
      </StContainer>
    </StWrap>
  );
};

export default TodaySchedules;

const StBlock = styled.div`
  margin-right: 40px;
`;

const StMarkBlock = styled.div<StylesProps>`
  width: 13px;
  height: 40px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'red'};
  border-radius: 10px;
  margin-left: 10px;
`;

const StScheduleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #cccccc;
  padding: 15px 10px;
`;

const StWrap = styled.div`
  display: flex;
  flex: 1;
`;

const StContainer = styled.div`
  width: 100%;
`;
