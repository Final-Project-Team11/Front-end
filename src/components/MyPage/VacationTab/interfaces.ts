export interface VacationList {
  Id: number;
  userName: string;
  typeDetail: string;
  start: string;
  end: string;
  status: 'submit' | 'accept' | 'deny';
}

export interface VacationPayload {
  status: 'submit' | 'accept' | 'deny';
  Id: number;
  userName: string;
}
