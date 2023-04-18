import React, { useContext } from 'react';
import { CalendarContext } from '../../Main/Main';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

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

  console.log(filterSchedules);
  return (
    <StWrap>
      <StContainer>
        {filterSchedules.length !== 0 ? (
          filterSchedules.map(item => {
            const startDay = new Date(item.start);
            return (
              <StScheduleBlock key={nanoid()}>
                <StMarkBlock backgroundColor={item.backgroundColor} />
                <StDateBlock>
                  <StSpan>{startDay.getFullYear()}</StSpan>
                  <StSpan>/</StSpan>
                  <StSpan>{startDay.getMonth().toString().padStart(2, '0')}</StSpan>
                  <StSpan>/</StSpan>
                  <StSpan>{startDay.getDate()}</StSpan>
                </StDateBlock>
                <StDateBlock>
                  <StSpan>{startDay.getHours()}</StSpan>
                  <StSpan>:</StSpan>
                  <StSpan>{startDay.getMinutes().toString().padStart(2, '0')}</StSpan>
                </StDateBlock>
                <StBlock>
                  <span>{item.userName}</span>
                </StBlock>
                <StBlock>
                  <span>{item.title}</span>
                </StBlock>
              </StScheduleBlock>
            );
          })
        ) : (
          <StScheduleBlock>
            <StMarkBlock backgroundColor={'lightgray'} />
            일정이 존재하지 않습니다.
          </StScheduleBlock>
        )}
      </StContainer>
    </StWrap>
  );
};

export default TodaySchedules;

const StSpan = styled.span`
  display: inline-block;
`;

const StDateBlock = styled.div`
  margin-right: 40px;
  font-size: 15px;
  font-weight: bold;
  color: #484240;
  display: flex;
  gap: 3px;
`;

const StBlock = styled.div`
  margin-right: 40px;
`;

const StMarkBlock = styled.div<StylesProps>`
  width: 13px;
  height: 30px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'red'};
  border-radius: 13px;
  margin-left: 10px;
`;

const StScheduleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #cccccc;

  padding: 15px 10px;
`;

const StWrap = styled.div`
  display: flex;
  flex: 1;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
`;

const StContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  color: #484240;
`;
