export interface ButtonProps {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small' | 'example';
  color?: string;
  background?: string;
  boarder?: string;
}

export interface CssProps {
  size?: 'large' | 'medium' | 'small' | 'example';
  color?: string;
  background?: string;
  boarder?: string;
}

export interface Sizes {
  [key: string]: {
    width: string;
    height: string;
  };
}
