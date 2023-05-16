import { EventObject } from '@toast-ui/calendar/*';
import React, { useEffect, useState } from 'react';
import { settingSchedule, settingVacation } from '../pages/SubMain/utils';
import { CalendarInfo, CalendarProps } from '../pages/SubMain/interfaces';

function useFilterData(data: CalendarInfo, tab: boolean): Partial<EventObject>[] {
  const [filterData, setFilterData] = useState<Partial<EventObject>[]>([]);

  useEffect(() => {
    if (tab === false) {
      const issues: CalendarProps[] | undefined = data?.issue?.map(
        (issue: CalendarProps) => settingSchedule(issue)
      );
      const schedules: CalendarProps[] | undefined = data?.schedule?.map(
        (schedule: CalendarProps) => settingSchedule(schedule)
      );
      const reports: Partial<EventObject>[] | undefined = data?.report?.map(
        (report: CalendarProps) => settingSchedule(report)
      );
      const others: Partial<EventObject>[] | undefined = data?.other?.map(
        (other: CalendarProps) => settingSchedule(other)
      );

      const meetings: Partial<EventObject>[] | undefined = data?.meeting?.map(
        (meeting: CalendarProps) => settingSchedule(meeting)
      );

      const events: Partial<EventObject>[] | undefined = data?.event?.map(
        (event: CalendarProps) => settingSchedule(event)
      );

      const meetingReports: Partial<EventObject>[] | undefined = data?.meetingReport?.map(
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
    } else {
      const events: Partial<EventObject>[] = [];
      const vacations: Partial<EventObject>[] | undefined = data?.vacation?.map(
        (vacation: CalendarProps) => settingVacation(vacation)
      );
      vacations !== undefined && events.push(...vacations);
      setFilterData(events);
    }
  }, [data]);

  return filterData;
}

export default useFilterData;
