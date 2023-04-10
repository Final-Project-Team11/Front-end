export interface DropdownHeaderProps {
  children: string;
  size?: 'nomal';
  color?: string;
  background?: string;
  border?: string;
}

export interface Cssprops {
  size?: 'nomal';
  color?: string;
  background?: string;
  border?: string;
}

export interface Sizes {
  [key: string]: {
    width: string;
    height: string;
  };
}
