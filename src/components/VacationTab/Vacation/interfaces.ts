export {};

export interface VacateProps {
  userName?: string;
  type?: string;
  startDay?: string;
  endDay?: string;
  status?: 'submit' | 'accept' | 'deny';
}
