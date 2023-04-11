export interface DropdownProps {
  children: string;
  items: string[];
  size?: 'small' | 'medium';
  color?: string;
  background?: string;
  border?: string;
}

export interface CssProps {
  size?: 'small' | 'medium';
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
