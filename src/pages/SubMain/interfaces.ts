export interface ScheduleProps {
  eventId?: number;
  eventType?: string;
  title?: string;
  userName?: string;
  startDay?: Date;
  endDay?: Date;
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
