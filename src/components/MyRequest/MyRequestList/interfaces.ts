export interface MyListProps {
  eventId: number;
  userName: string;
  title: string;
  file?: string;
  fileName?: string;
  startDay: string;
  endDay: string;
  status: 'submit' | 'accept' | 'deny';
}

export interface TagsProps {
  tag: MyListProps;
}
