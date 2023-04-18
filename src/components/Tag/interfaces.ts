export interface TagBlockCssProps {
  types: 'MyPage' | 'ManagerPage';
}

export interface TagElement {
  eventId: number;
  enrollDay: string;
  title: string;
  userName: string;
  mentionId: number;
  isChecked: 0 | 1;
  eventType: string;
}
