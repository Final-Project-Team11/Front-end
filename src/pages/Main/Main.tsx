/* eslint-disable no-console */
import './main.css';

import type { EventObject, ExternalEventTypes, Options } from '@toast-ui/calendar';
import { TZDate } from '@toast-ui/calendar';
import type { ChangeEvent, MouseEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

import Calendar from '../../components/ToastCalendar/Calendar';
import { theme } from './theme';
import { addDate, addHours, subtractDate } from './utils';
import Feed from '../../components/Feed/Feed';

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

export function Main({ view }: { view: ViewType }) {
  const calendarRef = useRef<typeof Calendar>(null);
  const [selectedDateRangeText, setSelectedDateRangeText] = useState('');
  const [selectedView, setSelectedView] = useState(view);
  const [DateClick, setDateClick] = useState(false);
  const initialCalendars: Options['calendars'] = [
    {
      id: '0',
      name: 'Private',
      backgroundColor: '#9e5fff',
      borderColor: '#9e5fff',
      dragBackgroundColor: '#9e5fff',
    },
    {
      id: '1',
      name: 'Company',
      backgroundColor: '#00a9ff',
      borderColor: '#00a9ff',
      dragBackgroundColor: '#00a9ff',
    },
  ];
  const initialEvents: Partial<EventObject>[] = [
    {
      id: '1',
      calendarId: '0',
      title: 'TOAST UI Calendar Study',
      category: 'time',
      start: today,
      end: addHours(today, 3),
    },
    {
      id: '2',
      calendarId: '0',
      title: 'Practice',
      category: 'milestone',
      start: addDate(today, 1),
      end: addDate(today, 1),
      isReadOnly: true,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getCalInstance = useCallback(() => calendarRef.current?.getInstance?.(), []);

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

    setDateClick(true);
    console.log('setDateClick', true);
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

  const ClickBkHandler = (e: globalThis.MouseEvent) => {
    console.log(e);
    DateClick === true && setDateClick(false);
  };

  useEffect(() => {
    window.addEventListener('click', ClickBkHandler);
    return () => {
      window.removeEventListener('click', ClickBkHandler);
    };
  }, [DateClick]);
  return (
    <div>
      <div className="headerContainer">
        <div
          style={{
            marginRight: '30px',
            width: '350px',
            height: '100px',
            backgroundColor: '#BADAFF',
          }}
        ></div>
        <div
          style={{ width: '100%', height: '100px', borderBottom: '3px solid #BADAFF' }}
        >
          <div
            style={{
              fontSize: '50px',
              fontWeight: 'bold',
              display: 'flex',
              color: '#BADAFF',
            }}
          >
            <div>
              <div>
                {selectedDateRangeText
                  .toString()
                  .split('-')
                  .splice(0, 1)
                  .join('')
                  .slice(0, 2)}
              </div>
              <div>
                {selectedDateRangeText
                  .toString()
                  .split('-')
                  .splice(0, 1)
                  .join('')
                  .slice(2, 4)}
              </div>
            </div>
            <div style={{ margin: '50px 0' }}>
              {selectedDateRangeText
                .toString()
                .split('-')
                .splice(1, 2)
                .join('')
                .padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
      <div className="bodyContainer">
        <div style={{ marginTop: '30px', marginRight: '30px' }}>
          <Feed />
        </div>
        <div style={{ flex: 1 }}>
          <Calendar
            height="630px"
            calendars={initialCalendars}
            month={{ startDayOfWeek: 7 }}
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
            onClickTimezonesCollapseBtn={onClickTimezonesCollapseBtn}
            onBeforeUpdateEvent={onBeforeUpdateEvent}
            onBeforeCreateEvent={onBeforeCreateEvent}
          />
        </div>
      </div>
      {DateClick === true && (
        <div style={{ margin: '10px 360px 0', borderTop: '3px solid #BADAFF' }}>
          <div
            style={{
              display: 'flex',
              gap: '30px',
              lineHeight: '50px',
              fontSize: '20px',
              textAlign: 'center',
            }}
          >
            <div>2023/04/08</div>
            <div>찬우</div>
            <div>디자인 회의</div>
          </div>
          <div
            style={{
              height: '150px',
              borderTop: '3px solid #BADAFF',
              borderBottom: '3px solid #BADAFF',
            }}
          >
            asdasasdsa
          </div>
          <div style={{ borderBottom: '3px solid #BADAFF', height: '50px' }}>멘션들</div>
        </div>
      )}
    </div>
  );
}
