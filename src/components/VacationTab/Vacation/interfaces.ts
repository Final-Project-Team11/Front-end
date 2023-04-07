export {};

export interface VacateProps {
  eventId?: number;
  userName?: string;
  title?: string;
  file?: string;
  startDay?: string;
  endDay?: string;
  status?: 'submit' | 'accept' | 'deny';
  children?: React.ReactNode;
}
