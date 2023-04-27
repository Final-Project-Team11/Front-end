export interface ISchedule {
  eventId: number;
  userName: string;
  startDay: Date;
  endDay: Date;
  title: string;
}

export interface IWeeklyInfo {
  Id: number | string;
  body: string;
  calendarId: string;
  end: Date;
  start: Date;
  title: string;
  userId: string;
  userName: string;
}
