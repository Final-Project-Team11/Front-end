export interface RequestInfo {
  eventId: number;
  userName: string;
  title: string;
  file: string;
  enrollDay: string;
  status: 'submit' | 'accept' | 'deny';
}
