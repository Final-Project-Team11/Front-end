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
  id?: number | string;
  calendarId?: string;
  title?: string;
  body?: string;
  start?: Date;
  end?: Date;
  attendees?: string[];
  location?: string;
  userId?: string;
  userName?: string;
  file?: string | File;

  color?: string;
  backgroundColor?: string;
  dragBackgroundColor?: string;
  borderColor?: string;
  isReadOnly?: boolean;
}
