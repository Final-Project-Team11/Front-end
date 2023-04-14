export interface TagElement {
  eventId: number;
  title: string;
  userName: string;
  mentionId: number;
  isChecked: boolean;
  eventType: string;
}

export interface TagsProps {
  tag: TagElement;
}

export interface CssProps {
  isChecked: boolean;
}
