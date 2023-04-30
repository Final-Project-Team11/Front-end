import React, { useEffect, createContext, useState } from 'react';
import SubMain from '../SubMain/SubMain';
import useGetMain from '../../api/hooks/Main/useGetMain';
import { CalendarProps } from '../SubMain/interfaces';
import { settingSchedule, settingVacation } from '../SubMain/utils';
import { EventObject } from '@toast-ui/calendar/types/types/events';
import { StWrap } from './styles';
import { recoilTabState } from '../../states/recoilTabState';
import { useRecoilValue } from 'recoil';
import { recoilCalendarState } from '../../states/recoilCalendarState';
import { useSetRecoilState } from 'recoil';

export const CalendarContext = createContext<Partial<EventObject>[]>([]);

const Main = () => {
  const tab = useRecoilValue(recoilTabState);
  const setCalendarState = useSetRecoilState(recoilCalendarState);
  const today = new Date();
  const { data, isLoading } = useGetMain({
    type: tab,
    year: today.getFullYear().toString(),
    month: (today.getMonth() + 1).toString(),
  });
  const [filterData, setFilterData] = useState<Partial<EventObject>[]>([]);

  useEffect(() => {
    if (tab === false) {
      const issues: Partial<EventObject>[] = data?.issue?.map((issue: CalendarProps) =>
        settingSchedule(issue)
      );
      const schedules: Partial<EventObject>[] = data?.schedule?.map(
        (schedule: CalendarProps) => settingSchedule(schedule)
      );
      const reports: Partial<EventObject>[] = data?.report?.map((report: CalendarProps) =>
        settingSchedule(report)
      );
      const others: Partial<EventObject>[] = data?.other?.map((other: CalendarProps) =>
        settingSchedule(other)
      );

      const meetings: Partial<EventObject>[] = data?.meeting?.map(
        (meeting: CalendarProps) => settingSchedule(meeting)
      );

      const events: Partial<EventObject>[] = data?.event?.map((event: CalendarProps) =>
        settingSchedule(event)
      );

      const meetingReports: Partial<EventObject>[] = data?.meetingReport?.map(
        (meetingReport: CalendarProps) => settingSchedule(meetingReport)
      );

      const eventList: Partial<EventObject>[] = [];
      issues !== undefined && eventList.push(...issues);
      schedules !== undefined && eventList.push(...schedules);
      reports !== undefined && eventList.push(...reports);
      others !== undefined && eventList.push(...others);
      events !== undefined && eventList.push(...events);
      meetings !== undefined && eventList.push(...meetings);
      meetingReports !== undefined && eventList.push(...meetingReports);
      setFilterData(eventList);
      // setCalendarState(eventList);
    } else {
      const events: Partial<EventObject>[] = [];
      const vacations: Partial<EventObject>[] = data?.map((vacation: CalendarProps) =>
        settingVacation(vacation)
      );
      vacations !== undefined && events.push(...vacations);
      setFilterData(events);
    }
  }, [data]);

  return (
    <CalendarContext.Provider value={filterData}>
      <StWrap>
        <SubMain view={'month'} />
      </StWrap>
    </CalendarContext.Provider>
  );
};

export default Main;
