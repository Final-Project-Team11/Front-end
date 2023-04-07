export interface TagsProps {
  eventId?: number;
  file?: string;
  title: string;
  startDay?: string;
  endDay?: string;
  startTime?: string;
  userName: string;
  isChecked?: Type['isChecked'];
}

export interface Type {
  isChecked?: boolean;
}

export interface CssProps {
  isChecked: Type['isChecked'];
}
