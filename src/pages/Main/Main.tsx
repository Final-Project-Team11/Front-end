import React, { createContext } from 'react';
import SubMain from '../SubMain/SubMain';
import useGetMain from '../../api/hooks/Main/useGetMain';
import { EventObject } from '@toast-ui/calendar/types/types/events';
import { StWrap } from './styles';
import { recoilTabState } from '../../states/recoilTabState';
import { useRecoilValue } from 'recoil';
import { recoilSelectedDateState } from '../../states/recoilSelectedDateState';
import { getCookie } from '../../api/auth/CookieUtils';
import { useNavigate } from 'react-router-dom';
import useFilterData from '../../hooks/useFilterData';

export const CalendarContext = createContext<Partial<EventObject>[]>([]);

const Main = () => {
  const token = getCookie('token');
  const navigate = useNavigate();
  if (token === undefined) {
    navigate('/login');
  }
  const tab = useRecoilValue(recoilTabState);
  const selectedDate = useRecoilValue(recoilSelectedDateState);
  const today = selectedDate === '' ? new Date() : new Date(selectedDate);
  const { data, isLoading } = useGetMain({
    type: tab,
    year: today.getFullYear().toString(),
    month: (today.getMonth() + 1).toString(),
  });

  const filterData = useFilterData(data, tab);

  return (
    <CalendarContext.Provider value={filterData}>
      <StWrap>
        <SubMain view={'month'} />
      </StWrap>
    </CalendarContext.Provider>
  );
};

export default Main;
