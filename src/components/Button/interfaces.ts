export interface ButtonProps {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small' | 'example' | 'Detail' | 'login' | 'signup';
  color?: string;
  background?: string;
  boarder?: string;
  borderRadius?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: React.CSSProperties;
}

export interface CssProps {
  size?: 'large' | 'medium' | 'small' | 'example' | 'Detail' | 'login' | 'signup';
  color?: string;
  background?: string;
  boarder?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

export interface Sizes {
  [key: string]: {
    width: string;
    height: string;
  };
}
