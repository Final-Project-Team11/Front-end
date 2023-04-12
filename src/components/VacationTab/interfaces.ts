export interface VacationList {
  eventId: number;
  userName: string;
  typeDetail: string;
  startDay: string;
  endDay: string;
  status: 'submit' | 'accept' | 'deny';
}
