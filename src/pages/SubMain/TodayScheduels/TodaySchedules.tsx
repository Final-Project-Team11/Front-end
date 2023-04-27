import React, { useContext, useEffect, useState } from 'react';
import { CalendarContext } from '../../Main/Main';
import { nanoid } from 'nanoid';
import { TodaysProps } from './interfaces';
import * as styles from './styles';
import { EventObject } from '@toast-ui/calendar/*';
import FolderIcon from '../../../assets/Icons/FolderIcon';
import TagIcon from '../../../assets/Icons/TagIcon';
import { CalendarProps } from '../interfaces';

const TodaySchedules = (props: TodaysProps) => {
  const schedules = useContext<CalendarProps[]>(CalendarContext);
  const today = props.todayData ? props.todayData : new Date().getDate();
  const filterSchedules = schedules?.filter(item => {
    const startDay = item.start && new Date(item.start);
    const endDay = item.end && new Date(item.end);

    if (startDay !== undefined && endDay !== undefined)
      return startDay.getDate() <= today && endDay.getDate() >= today;
  });

  return (
    <styles.StWrap>
      <styles.StContainer>
        {filterSchedules.length !== 0 ? (
          filterSchedules.map(item => {
            const startDay = item.start && new Date(item.start);
            const title = item.title && item.title.split('-')[0];
            if (startDay !== undefined) {
              return (
                <styles.StScheduleBlock key={nanoid()}>
                  <styles.StContentBlock>
                    <styles.StMarkBlock backgroundColor={item.backgroundColor} />
                    <styles.StDateBlock>
                      <styles.StSpan>{startDay.getFullYear()}</styles.StSpan>
                      <styles.StSpan>/</styles.StSpan>
                      <styles.StSpan>
                        {(startDay.getMonth() + 1).toString().padStart(2, '0')}
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
                      <span>{title}</span>
                    </styles.StBlock>
                  </styles.StContentBlock>
                  <styles.StIconBlock>
                    <div>{item.files && <FolderIcon />}</div>
                    <div style={{ marginBottom: '-5px' }}>
                      {item.attendees && <TagIcon />}
                    </div>
                  </styles.StIconBlock>
                </styles.StScheduleBlock>
              );
            }
          })
        ) : (
          <styles.StBlankBlock>
            <styles.StMarkBlock backgroundColor={'lightgray'} />
            일정이 존재하지 않습니다.
          </styles.StBlankBlock>
        )}
      </styles.StContainer>
    </styles.StWrap>
  );
};

export default TodaySchedules;
