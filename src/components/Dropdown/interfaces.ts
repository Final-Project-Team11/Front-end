export interface DropdownProps {
  children: string;
  items: { name: string; value: number }[];
  size?: 'small' | 'medium';
  color?: string;
  background?: string;
  border?: string;
  value?: number | string;
  onChange?: (value: number | string) => void;
  style?: React.CSSProperties;
}

export interface CssProps {
  size?: 'small' | 'medium';
  color?: string;
  background?: string;
  border?: string;
  style?: React.CSSProperties;
}

export interface Sizes {
  [key: string]: {
    width: string;
    height: string;
  };
}
