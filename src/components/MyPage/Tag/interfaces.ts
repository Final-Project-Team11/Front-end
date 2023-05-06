export interface TagBlockCssProps {
  types: 'MyPage' | 'ManagerPage';
}

export interface Mention {
  Id: number;
  calenderId: string;
  userName: string;
  isChecked: boolean;
  mentionId: number;
  title: string;
}

export interface TagsProps {
  tag: Mention;
  types: 'MyPage' | 'ManagerPage';
}
