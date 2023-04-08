import { ISchedule } from '../interfaces';

export interface WeekdayProps {
  id: number;
  schedules?: ISchedule[];
  isStart?: boolean;
  isEnd?: boolean;
  author?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export interface WeedayCssProps {
  backgroundColor?: string;
  isStart?: boolean;
  isEnd?: boolean;
}
