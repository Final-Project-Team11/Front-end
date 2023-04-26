export interface ScheduleProps {
  eventId?: number;
  eventType?: string;
  title?: string;
  userName?: string;
  startDay?: Date;
  endDay?: Date;
  enrollDay?: Date;
  content?: string;
  mentions?: string[];
  location?: string;
  ref?: string[];
  file?: string | File;
  fileLocation?: string;
  fileName?: string;
  userId?: string;
  backgroundColor?: string;
  startTime?: string;
}

export interface VacationProps {
  eventId?: number;
  eventType?: string;
  userName?: string;
  startDay?: Date;
  endDay?: Date;
  typeDetail?: string;
  userId?: string;
}

export interface ServerProps {
  eventId?: number;
  eventType?: string;
  title?: string;
  userName?: string;
  startDay?: string;
  endDay?: string;
  content?: string;
  mention?: string[];
  location?: string;
  ref?: string[];
  file?: File | string;
  startTime?: string;
}
export interface InitialCalendar {
  id: string;
  name: string;
  color?: string;
  backgroundColor?: string;
  dragBackgroundColor?: string;
  borderColor?: string;
}

export interface CalendarProps {
  id?: string | number;
  Id?: string | number;
  calendarId?: string;
  title?: string;
  body?: string;
  start?: Date;
  end?: Date;
  attendees?: string[];
  location?: string;
  userId?: string;
  userName?: string;
  typeDetail?: string;
  files?: [
    {
      fileLocation?: string;
      fileName?: string;
    }
  ];

  fileList?: File[] | undefined; //서버에서 정보 받을 때,
  color?: string;
  backgroundColor?: string;
  dragBackgroundColor?: string;
  borderColor?: string;
  isReadOnly?: boolean;
}
