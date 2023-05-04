/* eslint-disable no-console */

import ScheduleFormat from '../../components/Main/DocumentForm/ScheduleFormat/ScheduleFormat';
import VacationFormat from '../../components/Main/DocumentForm/VacationFormat/VacationFormat';
import type { EventObject, ExternalEventTypes, Options } from '@toast-ui/calendar';
import { recoilSelectedDateState } from '../../states/recoilSelectedDateState';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { recoilClickEventState } from '../../states/recoilClickEventState';
import { useGetCardInfo } from '../../api/hooks/Card/useGetCardInfo';
import { recoilTabState } from '../../states/recoilTabState';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import Calendar from '../../components/ToastCalendar/Calendar';
import { getScheduleColor, initCalendar } from './utils';
import { getCookie } from '../../api/auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import { CalendarContext } from '../Main/Main';
import TodaySchedules from './TodaySchedules';
import Feed from '../../components/Feed/Feed';
import { CalendarProps } from './interfaces';
import type { MouseEvent } from 'react';
import { theme } from './theme';
import Swal from 'sweetalert2';
import * as UI from './styles';
import Header from './Header';
import './subMain.css';

type ViewType = 'month' | 'week' | 'day';

export default function SubMain({ view }: { view: ViewType }) {
  const calendarRef = useRef<typeof Calendar>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const tab = useRecoilValue(recoilTabState);
  const user = useGetCardInfo();

  const setSelectedDateRangeText = useSetRecoilState(recoilSelectedDateState);
  const [initialEvents, setInitialEvents] = useState<Partial<EventObject>[]>();
  const [event, setEvent] = useRecoilState(recoilClickEventState);
  const [clickDetail, setClickDetail] = useState<boolean>(false);
  const [clickData, setClickData] = useState<CalendarProps>();
  const [selectedView, setSelectedView] = useState(view);

  const initialCalendars: Options['calendars'] = initCalendar(tab);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getCalInstance = useCallback(() => calendarRef.current?.getInstance?.(), []);
  const schedules = useContext<CalendarProps[]>(CalendarContext);

  useEffect(() => {
    setInitialEvents(schedules);
  }, [schedules]);

  // <-------------------------이전 달 / 다음 달 이동 시에 필요한 날짜 계산------------------------->

  const updateRenderRangeText = useCallback(() => {
    const calInstance = getCalInstance();
    if (!calInstance) {
      setSelectedDateRangeText('');
    }

    const viewName = calInstance.getViewName();
    const calDate = calInstance.getDate();
    const rangeStart = calInstance.getDateRangeStart();
    const rangeEnd = calInstance.getDateRangeEnd();

    let year = calDate.getFullYear();
    let month = calDate.getMonth() + 1;
    let date = calDate.getDate();
    let dateRangeText: string;

    switch (viewName) {
      case 'month': {
        dateRangeText = `${year}-${month}`;
        break;
      }
      case 'week': {
        year = rangeStart.getFullYear();
        month = rangeStart.getMonth() + 1;
        date = rangeStart.getDate();
        const endMonth = rangeEnd.getMonth() + 1;
        const endDate = rangeEnd.getDate();

        const start = `${year}-${month < 10 ? '0' : ''}${month}-${
          date < 10 ? '0' : ''
        }${date}`;
        const end = `${year}-${endMonth < 10 ? '0' : ''}${endMonth}-${
          endDate < 10 ? '0' : ''
        }${endDate}`;
        dateRangeText = `${start} ~ ${end}`;
        break;
      }
      default:
        dateRangeText = `${year}-${month}-${date}`;
    }

    setSelectedDateRangeText(dateRangeText);
  }, [getCalInstance]);

  useEffect(() => {
    setSelectedView(view);
  }, [view]);

  useEffect(() => {
    setClickDetail(false);
  }, [tab]);

  useEffect(() => {
    updateRenderRangeText();
  }, [selectedView, updateRenderRangeText]);

  // <-------------------------일정 / 휴가 생성 후 호출되는 Event------------------------->

  const onAfterRenderEvent: ExternalEventTypes['afterRenderEvent'] = res => {
    const token = getCookie('token');
    const decoded = token && jwtDecode<JwtPayload>(token);
    const userId = decoded ? decoded.userId : '';

    const newData = {
      id: res.id,
      calendarId: res.calendarId,
      title: res.title,
      start: res.start,
      end: res.end,
      body: res.body,
      attendees: res.attendees,
      userId: userId,
      isReadOnly: res.isReadOnly,
      backgroundColor: getScheduleColor(tab, res.calendarId),
      location: res.location,
      userName: user.userInfo?.userName,
      files: undefined,
    };

    setClickData(newData);
    setClickDetail(true);
  };

  // <-------------------------다음 달/ 이전 달 이동 시 사용되는 Event------------------------->

  const onClickNavi = (ev: MouseEvent<HTMLButtonElement>) => {
    if ((ev.target as HTMLButtonElement).tagName === 'BUTTON') {
      const button = ev.target as HTMLButtonElement;
      const actionName = (button.getAttribute('data-action') ?? 'month').replace(
        'move-',
        ''
      );
      getCalInstance()[actionName]();
      updateRenderRangeText();
    }
  };

  // <-------------------------일정 / 휴가 클릭 했을때 호출되는 Event------------------------->
  const onClickEvent: ExternalEventTypes['clickEvent'] = res => {
    for (let i = 0; i < schedules.length; i++) {
      if (schedules[i].id === res.event.id) {
        setClickData(schedules[i]);
        setClickDetail(true);
        setEvent(schedules[i]);
        break;
      }
    }

    setClickDetail(true);
  };

  // <-------------------------일정 / 휴가 생성전에 호출되는 Event------------------------->
  const onBeforeCreateEvent: ExternalEventTypes['beforeCreateEvent'] = eventData => {
    const event = {
      calendarId: eventData.calendarId || '',
      id: String(Math.random()),
      title: eventData.title,
      isAllday: eventData.isAllday,
      start: eventData.start,
      end: eventData.end,
      category: eventData.isAllday ? 'allday' : 'time',
      dueDateClass: '',
      location: eventData.location,
      state: eventData.state,
      isPrivate: eventData.isPrivate,
    };

    getCalInstance().createEvents([event]);
  };

  // <-------------------------일정 / 휴가 취소 버튼 클릭 시 호출되는 Event------------------------->
  const onDeleteEvent = (id?: number | string, calenarId?: number | string) => {
    getCalInstance().deleteEvent(id, calenarId);
    setClickDetail(false);
  };

  return (
    <UI.Wrap>
      <UI.HeaderBlock>
        <Header initialCalendars={initialCalendars} onClickNavi={onClickNavi} />
      </UI.HeaderBlock>
      <UI.BodyWrap>
        <UI.BodyContainer className="bodyContainer">
          <UI.FeedContainer>
            <Feed />
          </UI.FeedContainer>
          <UI.CalendarContainer>
            <Calendar
              height="750px"
              calendars={initialCalendars}
              month={{ startDayOfWeek: 7, visibleEventCount: 3 }}
              events={initialEvents}
              template={{
                milestone(event: any) {
                  return `<span style="color: #fff; background-color: ${event.backgroundColor};">${event.title}</span>`;
                },
                allday(event: any) {
                  return `[All day] ${event.title}`;
                },
              }}
              theme={theme}
              timezone={{
                zones: [
                  {
                    timezoneName: 'Asia/Seoul',
                    displayLabel: 'Seoul',
                    tooltip: 'UTC+09:00',
                  },
                  {
                    timezoneName: 'Pacific/Guam',
                    displayLabel: 'Guam',
                    tooltip: 'UTC+10:00',
                  },
                ],
              }}
              useDetailPopup={false}
              useFormPopup={true}
              view={selectedView}
              week={{
                showTimezoneCollapseButton: true,
                timezonesCollapsed: false,
                eventView: true,
                taskView: true,
              }}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              ref={calendarRef}
              onAfterRenderEvent={onAfterRenderEvent}
              onClickEvent={onClickEvent}
              clickMoreEventsBtn={true}
              onBeforeCreateEvent={onBeforeCreateEvent}
            />
          </UI.CalendarContainer>
        </UI.BodyContainer>
      </UI.BodyWrap>
      <UI.Footer>
        <UI.FooterContainer>
          {clickDetail === false ? (
            <TodaySchedules />
          ) : tab === false ? (
            <ScheduleFormat
              props={{ ...clickData }}
              propsRef={detailRef}
              onReturnHandler={setClickDetail}
              onCancelHandler={onDeleteEvent}
            />
          ) : (
            <VacationFormat
              props={{ ...clickData }}
              propsRef={detailRef}
              onReturnHandler={setClickDetail}
              onCancelHandler={onDeleteEvent}
            />
          )}
        </UI.FooterContainer>
      </UI.Footer>
    </UI.Wrap>
  );
}
