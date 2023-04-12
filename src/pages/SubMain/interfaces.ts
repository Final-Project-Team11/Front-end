export interface ScheduleProps {
  eventId?: number;
  eventType?: string;
  title?: string;
  userName?: string;
  startDay?: Date;
  endDay?: Date;
  body?: string;
  mention?: string[];
}

export interface InitialCalendar {
  id: string;
  name: string;
  color?: string;
  backgroundColor?: string;
  dragBackgroundColor?: string;
  borderColor?: string;
}
