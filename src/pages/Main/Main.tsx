import React, { useEffect, createContext, useState, useContext } from 'react';
import { SubMain } from '../SubMain/SubMain';
import useGetMain from '../../api/hooks/Main/useGetMain';
import { ScheduleProps } from '../SubMain/interfaces';
import { settingSchedule, settingVacation } from '../SubMain/utils';
import { EventObject } from '@toast-ui/calendar/types/types/events';
import { StWrap, StTabButton, StButtonBlcok } from './styles';
import { ChangeTabContext, TabContext } from '../../api/hooks/Main/useTabContext';

export const CalendarContext = createContext<Partial<EventObject>[]>([]);

const Main = () => {
  const [tab, setTab] = useContext(ChangeTabContext);
  const { data, isLoading } = useGetMain(tab);
  const [filterData, setFilterData] = useState<Partial<EventObject>[]>([]);

  useEffect(() => {
    if (tab === false) {
      const schedules: Partial<EventObject>[] = data?.schedule?.map(
        (schedule: ScheduleProps) => settingSchedule(schedule)
      );
      const reports: Partial<EventObject>[] = data?.report?.map((report: ScheduleProps) =>
        settingSchedule(report)
      );
      const others: Partial<EventObject>[] = data?.other?.map((other: ScheduleProps) =>
        settingSchedule(other)
      );

      const meeting: Partial<EventObject>[] = data?.meeting?.map((other: ScheduleProps) =>
        settingSchedule(other)
      );
      const events: Partial<EventObject>[] = [];
      schedules !== undefined && events.push(...schedules);
      reports !== undefined && events.push(...reports);
      others !== undefined && events.push(...others);
      meeting !== undefined && events.push(...meeting);
      setFilterData(events);

      console.log('events', events);
    } else {
      const events: Partial<EventObject>[] = [];
      const vacations: Partial<EventObject>[] = data?.map((vacation: ScheduleProps) =>
        settingVacation(vacation)
      );
      vacations !== undefined && events.push(...vacations);
      setFilterData(events);
    }
  }, [data]);

  return (
    <TabContext>
      <CalendarContext.Provider value={filterData}>
        <StWrap>
          <StButtonBlcok></StButtonBlcok>
          {tab === false ? <SubMain view={'month'} /> : <SubMain view={'month'} />}
        </StWrap>
      </CalendarContext.Provider>
    </TabContext>
  );
};

export default Main;
