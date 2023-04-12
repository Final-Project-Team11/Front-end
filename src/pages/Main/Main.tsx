import React, { useEffect, useRef, useState } from 'react';
import { SubMain } from '../SubMain/SubMain';
import Calendar from '../../components/ToastCalendar/Calendar';
import useGetMain from '../../api/hooks/useGetMain';
import { ScheduleProps } from '../SubMain/interfaces';
import { settingSchedule } from '../SubMain/utils';
import { EventObject } from '@toast-ui/calendar/types/types/events';
import { StWrap, StTabButton, StButtonBlcok } from './styles';

const Main = () => {
  const [tab, setTab] = useState(1);
  const { data, isLoading } = useGetMain(tab);
  const [filterData, setFilterData] = useState<Partial<EventObject>[]>();

  useEffect(() => {
    if (tab === 0) {
      const schedules: Partial<EventObject>[] = data?.schedule?.map(
        (schedule: ScheduleProps) => settingSchedule(schedule)
      );
      const reports: Partial<EventObject>[] = data?.report?.map((report: ScheduleProps) =>
        settingSchedule(report)
      );
      const others: Partial<EventObject>[] = data?.other?.map((other: ScheduleProps) =>
        settingSchedule(other)
      );

      const events: Partial<EventObject>[] = [];
      schedules !== undefined && events.push(...schedules);
      reports !== undefined && events.push(...reports);
      others !== undefined && events.push(...others);
      setFilterData(events);
    } else {
      const events = [];
      const vacations: Partial<EventObject>[] = data?.vacation?.map(
        (vacation: ScheduleProps) => settingSchedule(vacation)
      );
      vacations !== undefined && events.push(...vacations);
      setFilterData(events);
    }
  }, [data]);

  return (
    <StWrap>
      <StButtonBlcok>
        <StTabButton onClick={() => setTab(0)} tab={tab}>
          일정
        </StTabButton>
        <StTabButton onClick={() => setTab(1)} tab={tab}>
          휴가
        </StTabButton>
      </StButtonBlcok>
      {tab === 0 ? (
        <SubMain view={'month'} tab={tab} data={filterData} />
      ) : (
        <SubMain view={'month'} tab={tab} data={filterData} />
      )}
    </StWrap>
  );
};

export default Main;
