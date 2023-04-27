import { Options, TZDate } from '@toast-ui/calendar';
import { CalendarProps, InitialCalendar, ServerProps, VacationProps } from './interfaces';
import { COLOR } from '../../styles/colors';

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

export function settingSchedule(schedule: CalendarProps): CalendarProps {
  const MEETING = '0';
  const EVENT = '1';
  const BUSINESS_TRIP = '2';
  const ISSUE = '3';

  const title = schedule?.userName
    ? schedule?.title + '-' + schedule?.userName
    : schedule?.calendarId;

  const newData = {
    id: schedule?.Id?.toString(),
    calendarId: schedule?.calendarId,
    title: title,
    start: schedule.start,
    end: schedule.end,
    body: schedule.body,
    attendees: schedule.attendees,
    userName: schedule.userName,
    userId: schedule.userId,
    files: schedule.files,
  };

  switch (schedule?.calendarId) {
    case MEETING:
      return {
        ...newData,
        backgroundColor: COLOR.CONBANTION_BAR,
        borderColor: COLOR.CONBANTION_BAR,
        dragBackgroundColor: COLOR.CONBANTION_BAR,
        color: COLOR.WHITE_COLOR,
        end: schedule.end,
        isReadOnly: true,
        location: schedule.location,
      };
    case EVENT:
      return {
        ...newData,
        backgroundColor: COLOR.OTHER_BAR,
        borderColor: COLOR.OTHER_BAR_BOARD,
        dragBackgroundColor: COLOR.OTHER_BAR,
        isReadOnly: true,
      };
    case BUSINESS_TRIP:
      return {
        ...newData,
        backgroundColor: COLOR.BUSINESS_TRIP_BAR,
        borderColor: COLOR.BUSINESS_TRIP_BAR,
        dragBackgroundColor: COLOR.BUSINESS_TRIP_BAR,
        isReadOnly: true,
      };
    case ISSUE:
      return {
        ...newData,
        backgroundColor: COLOR.MEETING_BAR,
        borderColor: COLOR.MEETING_BAR,
        dragBackgroundColor: COLOR.MEETING_BAR,
        isReadOnly: true,
        location: schedule.location,
      };

    default:
      return {
        ...newData,
        backgroundColor: COLOR.OTHER_BAR,
        borderColor: COLOR.OTHER_BAR_BOARD,
        dragBackgroundColor: COLOR.OTHER_BAR,
        color: '#FFFFFF',
        isReadOnly: true,
      };
  }
}

export function settingVacation(vacation: CalendarProps) {
  const VACATION = '휴가';
  const HALF_DAY_OFF = '반차';
  const MONTHLY_VACTION = '월차';
  const SICK_DAY = '병가';

  const title = vacation?.userName
    ? vacation?.typeDetail + '-' + vacation?.userName
    : vacation?.typeDetail;

  const newData = {
    id: vacation?.Id,
    calendarId: vacation?.typeDetail,
    start: vacation.start,
    end: vacation.end,
    title: title,
    userName: vacation.userName,
  };

  switch (vacation?.typeDetail) {
    case VACATION:
      return {
        ...newData,
        backgroundColor: COLOR.VACATION_RED,
        borderColor: COLOR.VACATION_RED,
        dragBackgroundColor: COLOR.VACATION_RED,
        color: '#FFFFFF',
        isReadOnly: true,
      };
    case HALF_DAY_OFF:
      return {
        ...newData,
        backgroundColor: COLOR.HALF_DAY_OFF_BAR,
        borderColor: COLOR.HALF_DAY_OFF_BOARD,
        dragBackgroundColor: COLOR.HALF_DAY_OFF_BAR,
        isReadOnly: true,
      };
    case MONTHLY_VACTION:
      return {
        ...newData,
        backgroundColor: COLOR.MONTHLY_VACTION_BAR,
        borderColor: COLOR.MONTHLY_VACTION_BAR,
        dragBackgroundColor: COLOR.MONTHLY_VACTION_BAR,
        color: COLOR.WHITE_COLOR,
        isReadOnly: true,
      };
    case SICK_DAY:
      return {
        ...newData,
        backgroundColor: COLOR.SICK_DAY_BAR,
        borderColor: COLOR.SICK_DAY_BAR,
        dragBackgroundColor: COLOR.SICK_DAY_BAR,
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

export function initCalendar(tab: boolean): InitialCalendar[] {
  if (tab === false) {
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
        name: '이벤트',
        backgroundColor: COLOR.OTHER_BAR,
        borderColor: COLOR.OTHER_BAR_BOARD,
        dragBackgroundColor: COLOR.OTHER_BAR_BOARD,
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
  } else if (tab === true) {
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

export function getCanlendarName(tab: boolean, id: string | undefined): string {
  if (tab === false) {
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
  postInfo: CalendarProps;
}

export function postFormat(tab: boolean, schedule: CalendarProps): postFormatProps {
  const strStart = schedule.start?.toString();
  const start = new Date(strStart || '');

  const strEnd = schedule.end?.toString();
  const end = new Date(strEnd || '');
  const defaultFormat = {
    start: start,
    end: end,
    title: schedule.title,
    body: schedule.body,
  };

  if (tab === false) {
    switch (schedule.calendarId) {
      case '0': {
        const postData = {
          url: 'meeting', //Isssue
          postInfo: {
            ...defaultFormat,
            location: schedule.location,
            attendees: schedule.attendees,
            fileList: schedule.fileList,
            calendarId: schedule.calendarId,
          },
        };
        return postData;
      }

      case '1': {
        const postData = {
          url: 'meeting',
          postInfo: {
            ...defaultFormat,
            location: schedule.location,
            attendees: schedule.attendees,
            calendarId: schedule.calendarId,
            fileList: schedule.fileList,
          },
        };
        return postData;
      }
      case '2': {
        const postData = {
          url: 'schedule',
          postInfo: {
            ...defaultFormat,
            location: schedule.location,
            attendees: schedule.attendees,
            fileList: schedule.fileList,
          },
        };
        return postData;
      }
      case '3': {
        const postData = {
          url: 'meeting',
          postInfo: {
            ...defaultFormat,
            location: schedule.location,
            attendees: schedule.attendees,
            fileList: schedule.fileList,
            calendarId: schedule.calendarId,
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
  } else if (tab === true) {
    const postData = {
      url: 'vacation',
      postInfo: {
        typeDetail: schedule.calendarId,
        start: start,
        end: end,
      },
    };
    return postData;
  } else {
    return {
      url: 'vacation',
      postInfo: { ...defaultFormat },
    };
  }
}

export function getScheduleColor(tab: boolean, eventType: string): string {
  if (tab === false) {
    switch (eventType) {
      case '0':
        return COLOR.CONBANTION_BAR;
      case '1':
        return COLOR.OTHER_BAR;
      case '2':
        return COLOR.BUSINESS_TRIP_BAR;
      case '3':
        return COLOR.MEETING_BAR;
      default:
        return COLOR.VACATION_RED;
    }
  } else {
    switch (eventType) {
      case '0':
        return COLOR.VACATION_RED;
      case '1':
        return COLOR.HALF_DAY_OFF_BAR;
      case '2':
        return COLOR.MONTHLY_VACTION_BAR;
      case '3':
        return COLOR.SICK_DAY_BAR;
      default:
        return COLOR.VACATION_RED;
    }
  }
}
