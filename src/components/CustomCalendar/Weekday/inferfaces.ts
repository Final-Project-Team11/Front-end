import { ISchedule } from '../interfaces';

export interface WeekdayProps {
  id: number;
  schedules?: ISchedule[];
  children?: React.ReactNode;
}

export interface WeedayCssProps {
  backgroundColor?: string;
  isStart?: boolean;
  isEnd?: boolean;
}
