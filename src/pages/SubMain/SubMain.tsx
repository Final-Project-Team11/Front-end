/* eslint-disable no-console */
//외부
import type { EventObject, ExternalEventTypes, Options } from '@toast-ui/calendar';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import { ScheduleProps } from './interfaces';
import { TZDate } from '@toast-ui/calendar';
import type { ChangeEvent, MouseEvent } from 'react';
import { switchCase } from '@babel/types';

//내부
import { addDate, addHours, initCalendar, settingSchedule, subtractDate } from './utils';
import Calendar from '../../components/ToastCalendar/Calendar';
import useGetMain from '../../api/hooks/useGetMain';
import Feed from '../../components/Feed/Feed';
import Detail from './Detail/Detail';
import { theme } from './theme';
import Header from './Header';
import './subMain.css';

type ViewType = 'month' | 'week' | 'day';
const today = new TZDate();
const viewModeOptions = [
  {
    title: 'Monthly',
    value: 'month',
  },
  {
    title: 'Weekly',
    value: 'week',
  },
  {
    title: 'Daily',
    value: 'day',
  },
];

export function SubMain({
  view,
  tab: tab,
  data,
}: {
  view: ViewType;
  tab: number;
  data: Partial<EventObject>[] | undefined;
}) {
  const calendarRef = useRef<typeof Calendar>(null);
  const [selectedDateRangeText, setSelectedDateRangeText] = useState('');
  const [selectedView, setSelectedView] = useState(view);
  const [ClickData, setClickData] = useState<ScheduleProps>();
  const [initialEvents, setInitialEvents] = useState<Partial<EventObject>[]>();
  const [ClickDetail, setClickDetail] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);

  const initialCalendars: Options['calendars'] = initCalendar(tab);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getCalInstance = useCallback(() => calendarRef.current?.getInstance?.(), []);

  useEffect(() => {
    setInitialEvents(data);
  }, [data]);

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
    updateRenderRangeText();
  }, [selectedView, updateRenderRangeText]);

  const onAfterRenderEvent: ExternalEventTypes['afterRenderEvent'] = res => {
    console.group('onAfterRenderEvent');
    console.log('Event Info : ', res);
    console.log('Event Info : ', res.title);
    console.groupEnd();

    const newData = {
      eventType: res.calendarId,
      title: res.title,
      startDay: res.start,
      endDay: res.end,
      body: res.body,
      mention: res.attendees,
    };
    setClickData(newData);
    setClickDetail(true);
  };

  const onBeforeDeleteEvent: ExternalEventTypes['beforeDeleteEvent'] = res => {
    console.group('onBeforeDeleteEvent');
    console.log('Event Info : ', res.title);
    console.groupEnd();

    const { id, calendarId } = res;

    getCalInstance().deleteEvent(id, calendarId);
  };

  const onChangeSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    setSelectedView(ev.target.value as ViewType);
  };

  const onClickDayName: ExternalEventTypes['clickDayName'] = res => {
    console.group('onClickDayName');
    console.log('Date : ', res.date);
    console.groupEnd();
  };

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

  const onClickEvent: ExternalEventTypes['clickEvent'] = res => {
    console.group('onClickEvent');
    console.log('MouseEvent : ', res.nativeEvent);
    console.log('Event Info : ', res.event);
    console.groupEnd();

    const newData = {
      eventId: res.event.id,
      eventType: res.event.calendarId,
      title: res.event.title,
      startDay: res.event.start,
      endDay: res.event.end,
      body: res.event.body,
      mention: res.event.attendees,
    };
    setClickData(newData);
    setClickDetail(true);
  };

  const onClickTimezonesCollapseBtn: ExternalEventTypes['clickTimezonesCollapseBtn'] =
    timezoneCollapsed => {
      console.group('onClickTimezonesCollapseBtn');
      console.log('Is Timezone Collapsed?: ', timezoneCollapsed);
      console.groupEnd();

      const newTheme = {
        'week.daygridLeft.width': '100px',
        'week.timegridLeft.width': '100px',
      };

      getCalInstance().setTheme(newTheme);
    };

  const onBeforeUpdateEvent: ExternalEventTypes['beforeUpdateEvent'] = updateData => {
    console.group('onBeforeUpdateEvent');
    console.log(updateData);
    console.groupEnd();

    const targetEvent = updateData.event;
    const changes = { ...updateData.changes };

    console.log('changes', changes);
    getCalInstance().updateEvent(targetEvent.id, targetEvent.calendarId, changes);
  };

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

  const clickBkHandler = (e: globalThis.MouseEvent) => {
    console.log('clickBkHandler', e.target);
    const node: Node | null = e.target as Node | null;
    if (
      !(node instanceof Element && node.tagName === 'SPAN') &&
      ClickDetail === true &&
      !detailRef.current?.contains(node)
    ) {
      setClickDetail(false);
      console.log('test');
    }
  };

  useEffect(() => {
    window.addEventListener('click', clickBkHandler);
    return () => {
      window.removeEventListener('click', clickBkHandler);
    };
  }, [ClickDetail]);

  return (
    <div style={{ width: '100%' }}>
      <Header selectedDateRangeText={selectedDateRangeText} tab={tab} />
      <div className="bodyContainer">
        <div style={{ marginTop: '30px', marginRight: '30px' }}>
          <Feed />
        </div>
        <div style={{ flex: 1 }}>
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
            onBeforeDeleteEvent={onBeforeDeleteEvent}
            onClickDayname={onClickDayName}
            onClickEvent={onClickEvent}
            clickMoreEventsBtn={true}
            onClickTimezonesCollapseBtn={onClickTimezonesCollapseBtn}
            onBeforeUpdateEvent={onBeforeUpdateEvent}
            onBeforeCreateEvent={onBeforeCreateEvent}
          />
        </div>
      </div>
      {ClickDetail === true && (
        <Detail
          eventId={ClickData?.eventId}
          eventType={ClickData?.eventType}
          title={ClickData?.title}
          startDay={ClickData?.startDay}
          endDay={ClickData?.endDay}
          body={ClickData?.content}
          mention={ClickData?.mention}
          detailRef={detailRef}
          instance={getCalInstance()}
          tab={tab}
        />
      )}
    </div>
  );
}
