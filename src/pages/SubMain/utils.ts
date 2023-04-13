import { Options, TZDate } from '@toast-ui/calendar';
import { InitialCalendar, ScheduleProps } from './interfaces';
import { COLOR } from '../../constants/colors';

export function clone(date: TZDate): TZDate {
  return new TZDate(date);
}

export function addHours(d: TZDate, step: number) {
  const date = clone(d);
  date.setHours(d.getHours() + step);

  return date;
}

export function addDate(d: TZDate, step: number) {
  const date = clone(d);
  date.setDate(d.getDate() + step);

  return date;
}

export function subtractDate(d: TZDate, steps: number) {
  const date = clone(d);
  date.setDate(d.getDate() - steps);

  return date;
}

export function settingSchedule(schedule: ScheduleProps) {
  const ISSUE = '회의';
  const OTHER = '기타';
  const BUSINESS_TRIP = '출장';
  const MEETING = '미팅';
  const today = new TZDate(); //임시

  const newData = {
    id: schedule?.eventId,
    calendarId: schedule?.eventType,
    title: schedule?.title,
    start: today,
    end: addDate(today, 3),
    body: schedule.userName + '/' + schedule.content,
    attendees: schedule.mention,
  };

  switch (schedule?.eventType) {
    case ISSUE:
      return {
        ...newData,
        backgroundColor: '#1F1F1F',
        borderColor: '#1F1F1F',
        dragBackgroundColor: '#1F1F1F',
        color: '#FFFFFF',
        isReadOnly: true,
      };
    case OTHER:
      return {
        ...newData,
        backgroundColor: '#FFFFFF',
        borderColor: '#1F1F1F',
        dragBackgroundColor: '#1F1F1F',
        isReadOnly: true,
      };
    case BUSINESS_TRIP:
      return {
        ...newData,
        backgroundColor: '#BADAFF',
        borderColor: '#BADAFF',
        dragBackgroundColor: '#BADAFF',
        isReadOnly: true,
      };
    case MEETING:
      return {
        ...newData,
        backgroundColor: '#E64042',
        borderColor: '#E64042',
        dragBackgroundColor: '#E64042',
        isReadOnly: true,
      };

    default:
      return {
        ...newData,
        backgroundColor: '#1F1F1F',
        borderColor: '#1F1F1F',
        dragBackgroundColor: '#1F1F1F',
        color: '#FFFFFF',
        isReadOnly: true,
      };
  }
}

export function initCalendar(tab: number): InitialCalendar[] {
  if (tab === 0) {
    return [
      {
        id: '0',
        name: '회의',
        backgroundColor: COLOR.CONBANTION_BAR,
        borderColor: COLOR.CONBANTION_BAR,
        dragBackgroundColor: COLOR.CONBANTION_BAR,
        color: COLOR.CONBANTION_BAR,
      },
      {
        id: '1',
        name: '기타',
        backgroundColor: COLOR.OTHER_BAR,
        borderColor: COLOR.OTHER_BAR_BOARD,
        dragBackgroundColor: COLOR.OTHER_BAR,
      },
      {
        id: '2',
        name: '출장',
        backgroundColor: COLOR.BUSINESS_TRIP_BAR,
        borderColor: COLOR.BUSINESS_TRIP_BAR,
        dragBackgroundColor: COLOR.BUSINESS_TRIP_BAR,
      },
      {
        id: '3',
        name: '미팅',
        backgroundColor: COLOR.MEETING_BAR,
        borderColor: COLOR.MEETING_BAR,
        dragBackgroundColor: COLOR.MEETING_BAR,
      },
    ];
  } else if (tab === 1) {
    return [
      {
        id: '0',
        name: '휴가',
        backgroundColor: COLOR.VACATION_BAR,
        borderColor: COLOR.VACATION_BAR,
        dragBackgroundColor: COLOR.VACATION_BAR,
        color: COLOR.VACATION_COLOR,
      },
      {
        id: '1',
        name: '반차',
        backgroundColor: COLOR.HALF_DAY_OFF_BAR,
        borderColor: COLOR.HALF_DAY_OFF_BOARD,
        dragBackgroundColor: COLOR.HALF_DAY_OFF_BAR,
      },
      {
        id: '2',
        name: '월차',
        backgroundColor: COLOR.MONTHLY_VACTION_BAR,
        borderColor: COLOR.MONTHLY_VACTION_BAR,
        dragBackgroundColor: COLOR.MONTHLY_VACTION_BAR,
      },
      {
        id: '3',
        name: '병가',
        backgroundColor: COLOR.SICK_DAY_BAR,
        borderColor: COLOR.SICK_DAY_BAR,
        dragBackgroundColor: COLOR.SICK_DAY_BAR,
      },
    ];
  } else {
    return [
      {
        id: '0',
        name: '회의',
        backgroundColor: COLOR.CONBANTION_BAR,
        borderColor: COLOR.CONBANTION_BAR,
        dragBackgroundColor: COLOR.CONBANTION_BAR,
        color: COLOR.CONBANTION_BAR,
      },
      {
        id: '1',
        name: '기타',
        backgroundColor: COLOR.OTHER_BAR,
        borderColor: COLOR.OTHER_BAR_BOARD,
        dragBackgroundColor: COLOR.OTHER_BAR,
      },
      {
        id: '2',
        name: '출장',
        backgroundColor: COLOR.BUSINESS_TRIP_BAR,
        borderColor: COLOR.BUSINESS_TRIP_BAR,
        dragBackgroundColor: COLOR.BUSINESS_TRIP_BAR,
      },
      {
        id: '3',
        name: '미팅',
        backgroundColor: COLOR.MEETING_BAR,
        borderColor: COLOR.MEETING_BAR,
        dragBackgroundColor: COLOR.MEETING_BAR,
      },
    ];
  }
}

export function getCanlendarName(tab: number, id: string): string {
  if (tab === 0) {
    switch (id) {
      case '0':
        return '회의';
      case '1':
        return '기타';
      case '2':
        return '출장';
      case '3':
        return '미팅';

      default:
        return '회의';
    }
  } else {
    switch (id) {
      case '0':
        return '휴가';
      case '1':
        return '반차';
      case '2':
        return '월차';
      case '3':
        return '병가';

      default:
        return '휴가';
    }
  }
}

interface postFormatProps {
  url: string;
  postInfo: ScheduleProps;
}

export function postFormat(tab: number, schedule: ScheduleProps): postFormatProps {
  if (tab === 0) {
    const defaultFormat = {
      startDay: schedule.startDay,
      endDay: schedule.endDay,
      title: schedule.title,
      content: schedule.content,
      ref: schedule.ref,
      file: schedule.file,
    };

    switch (schedule.eventType) {
      case '회의': {
        const postData = {
          url: 'meeting',
          postInfo: {
            ...defaultFormat,
            location: schedule.location,
          },
        };
        return postData;
      }

      case '기타': {
        const postData = {
          url: 'other',
          postInfo: {
            ...defaultFormat,
          },
        };
        return postData;
      }
      case '출장': {
        const postData = {
          url: 'schedule',
          postInfo: {
            ...defaultFormat,
          },
        };
        return postData;
      }
      case '미팅': {
        const postData = {
          url: 'meeting',
          postInfo: {
            ...defaultFormat,
          },
        };
        return postData;
      }

      default:
        return {
          url: 'schedule',
          postInfo: {
            ...defaultFormat,
          },
        };
    }
  } else if (tab === 1) {
    const postData = {
      url: 'vacation',
      postInfo: {
        typeDetail: schedule.eventType,
        startDay: schedule.startDay,
        endDay: schedule.endDay,
      },
    };
    return postData;
  } else {
    return {
      url: 'vacation',
      postInfo: { ...schedule },
    };
  }
}
