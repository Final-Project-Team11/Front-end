import { Options, TZDate } from '@toast-ui/calendar';
import { InitialCalendar, ScheduleProps, ServerProps, VacationProps } from './interfaces';
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
  const ISSUE = 'Meetings';
  const OTHER = 'Reports';
  const BUSINESS_TRIP = 'Schedules';
  const MEETING = 'Issues';

  const title = schedule?.userName
    ? schedule?.userName + '-' + schedule?.title
    : schedule?.eventType;

  const newData = {
    id: schedule?.userId,
    calendarId: schedule?.eventType,
    title: title,
    start: schedule.startDay,
    end: schedule.endDay,
    body: schedule.content,
    attendees: schedule.mentions,
    userName: schedule.userName,
  };

  switch (schedule?.eventType) {
    case ISSUE:
      return {
        ...newData,
        backgroundColor: COLOR.SCHEDULE_BLUE,
        borderColor: COLOR.SCHEDULE_BLUE,
        dragBackgroundColor: COLOR.SCHEDULE_BLUE,
        color: COLOR.WHITE_COLOR,
        isReadOnly: true,
      };
    case OTHER:
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
    case MEETING:
      return {
        ...newData,
        backgroundColor: COLOR.MEETING_BAR,
        borderColor: COLOR.MEETING_BAR,
        dragBackgroundColor: COLOR.MEETING_BAR,
        isReadOnly: true,
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

export function settingVacation(vacation: VacationProps) {
  const VACATION = '휴가';
  const HALF_DAY_OFF = '반차';
  const MONTHLY_VACTION = '월차';
  const SICK_DAY = '병가';

  const title = vacation?.userName
    ? vacation?.userName + '-' + vacation?.typeDetail
    : vacation?.typeDetail;

  const newData = {
    id: vacation?.userId,
    calendarId: vacation?.typeDetail,
    start: vacation.startDay,
    end: vacation.endDay,
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

export function getCanlendarName(tab: number, id: string | undefined): string {
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
  postInfo: ServerProps;
}

export function postFormat(tab: number, schedule: ScheduleProps): postFormatProps {
  const defaultFormat = {
    startDay: schedule.startDay?.toString(),
    endDay: schedule.endDay?.toString(),
    title: schedule.title,
    content: schedule.content,
    ref: schedule.ref,
    file: schedule.file,
  };

  if (tab === 0) {
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
        typeDetail: getCanlendarName(tab, schedule.eventType),
        startDay: schedule.startDay?.toString(),
        endDay: schedule.endDay?.toString(),
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
