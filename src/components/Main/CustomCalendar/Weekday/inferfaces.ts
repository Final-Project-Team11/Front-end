import { ISchedule } from '../interfaces';

export interface WeekdayProps {
  id: number;
  children?: React.ReactNode;
  width: string;
}

export interface WeedayCssProps {
  backgroundColor?: string;
  isStart?: boolean;
  isEnd?: boolean;
  width?: string;
}
