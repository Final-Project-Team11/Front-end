import React, { useEffect, createContext, useState, useContext } from 'react';
import { SubMain } from '../SubMain/SubMain';
import useGetMain from '../../api/hooks/Main/useGetMain';
import { ScheduleProps } from '../SubMain/interfaces';
import { settingSchedule, settingVacation } from '../SubMain/utils';
import { EventObject } from '@toast-ui/calendar/types/types/events';
import { StWrap, StTabButton, StButtonBlcok } from './styles';

export const CalendarContext = createContext<Partial<EventObject>[]>([]);
export const TabContext = createContext<number>(-1);

const Main = () => {
  const [tab, setTab] = useState(1);
  const { data, isLoading } = useGetMain(tab);
  const [filterData, setFilterData] = useState<Partial<EventObject>[]>([]);

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
      const events = [];
      const vacations: Partial<EventObject>[] = data?.map((vacation: ScheduleProps) =>
        settingVacation(vacation)
      );
      vacations !== undefined && events.push(...vacations);
      setFilterData(events);
    }
  }, [data]);

  return (
    <TabChangeContext>
      <CalendarContext.Provider value={filterData}>
        <TabContext.Provider value={tab}>
          <StWrap>
            <StButtonBlcok>
              <StTabButton onClick={() => setTab(0)} tab={tab}>
                일정
              </StTabButton>
              <StTabButton onClick={() => setTab(1)} tab={tab}>
                휴가
              </StTabButton>
            </StButtonBlcok>
            {tab === 0 ? <SubMain view={'month'} /> : <SubMain view={'month'} />}
          </StWrap>
        </TabContext.Provider>
      </CalendarContext.Provider>
    </TabChangeContext>
  );
};

export default Main;

type State = boolean;
type Dispatch = React.Dispatch<React.SetStateAction<State>>;
export const ChangeTabContext = createContext<[State, Dispatch]>([
  false,
  () => {
    //
  },
]);

interface ContextProps {
  children: React.ReactNode;
}
function TabChangeContext({ children }: ContextProps) {
  const [tab, setTab] = useState(false);
  const contextValue = { tab, setTab };

  return (
    <ChangeTabContext.Provider value={[tab, setTab]}>
      {children}
    </ChangeTabContext.Provider>
  );
}
