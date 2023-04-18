import React, { useContext } from 'react';
import { CalendarContext } from '../../Main/Main';
import { nanoid } from 'nanoid';
import { TodaysProps } from './interfaces';
import * as styles from './styles';

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
    <styles.StWrap>
      <styles.StContainer>
        {filterSchedules.length !== 0 ? (
          filterSchedules.map(item => {
            const startDay = new Date(item.start);
            return (
              <styles.StScheduleBlock key={nanoid()}>
                <styles.StMarkBlock backgroundColor={item.backgroundColor} />
                <styles.StDateBlock>
                  <styles.StSpan>{startDay.getFullYear()}</styles.StSpan>
                  <styles.StSpan>/</styles.StSpan>
                  <styles.StSpan>
                    {startDay.getMonth().toString().padStart(2, '0')}
                  </styles.StSpan>
                  <styles.StSpan>/</styles.StSpan>
                  <styles.StSpan>{startDay.getDate()}</styles.StSpan>
                </styles.StDateBlock>
                <styles.StDateBlock>
                  <styles.StSpan>{startDay.getHours()}</styles.StSpan>
                  <styles.StSpan>:</styles.StSpan>
                  <styles.StSpan>
                    {startDay.getMinutes().toString().padStart(2, '0')}
                  </styles.StSpan>
                </styles.StDateBlock>
                <styles.StBlock>
                  <span>{item.userName}</span>
                </styles.StBlock>
                <styles.StBlock>
                  <span>{item.title}</span>
                </styles.StBlock>
              </styles.StScheduleBlock>
            );
          })
        ) : (
          <styles.StScheduleBlock>
            <styles.StMarkBlock backgroundColor={'lightgray'} />
            일정이 존재하지 않습니다.
          </styles.StScheduleBlock>
        )}
      </styles.StContainer>
    </styles.StWrap>
  );
};

export default TodaySchedules;
