export interface ButtonProps {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small' | 'example' | 'Detail';
  color?: string;
  background?: string;
  boarder?: string;
  borderRadius?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface CssProps {
  size?: 'large' | 'medium' | 'small' | 'example' | 'Detail';
  color?: string;
  background?: string;
  boarder?: string;
  borderRadius?: string;
}

export interface Sizes {
  [key: string]: {
    width: string;
    height: string;
  };
}
