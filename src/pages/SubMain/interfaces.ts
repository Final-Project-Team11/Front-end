export interface ScheduleProps {
  eventId?: number;
  eventType?: string;
  title?: string;
  userName?: string;
  startDay?: Date;
  endDay?: Date;
  content?: string;
  mention?: string[];
  location?: string;
  ref?: string;
  file?: string;
}

export interface VacationProps {
  eventId?: number;
  eventType?: string;
  userName?: string;
  startDay?: Date;
  endDay?: Date;
  typeDetail?: string;
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
  ref?: string;
  file?: string;
}
export interface InitialCalendar {
  id: string;
  name: string;
  color?: string;
  backgroundColor?: string;
  dragBackgroundColor?: string;
  borderColor?: string;
}
