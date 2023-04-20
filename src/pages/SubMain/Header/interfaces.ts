export interface HeaderProps {
  selectedDateRangeText: string;
  initialCalendars: InitialCalendar[];
  onClickNavi?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface InitialCalendar {
  id: string;
  name: string;
  color?: string;
  backgroundColor?: string;
  dragBackgroundColor?: string;
  borderColor?: string;
}
