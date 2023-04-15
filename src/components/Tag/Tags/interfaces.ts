export interface TagElement {
  eventId: number;
  enrollDay: string;
  title: string;
  userName: string;
  mentionId: number;
  isChecked: 0 | 1;
  eventType: string;
}

export interface TagsProps {
  tag: TagElement;
}

export interface CssProps {
  isChecked: 0 | 1;
}
