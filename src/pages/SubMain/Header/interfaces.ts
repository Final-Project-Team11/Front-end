export interface HeaderProps {
  selectedDateRangeText: string;
  tab: number;

  initialCalendars: InitialCalendar[];
}

export interface InitialCalendar {
  id: string;
  name: string;
  color?: string;
  backgroundColor?: string;
  dragBackgroundColor?: string;
  borderColor?: string;
}
