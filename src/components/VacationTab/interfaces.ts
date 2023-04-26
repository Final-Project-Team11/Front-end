export interface VacationList {
  Id: number;
  userName: string;
  typeDetail: string;
  start: string;
  end: string;
  status: 'submit' | 'accept' | 'deny';
}
