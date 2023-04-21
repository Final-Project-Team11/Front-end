export interface InputProps {
  types: Type['types'];
  children?: React.ReactNode;
  Bgcolor?: string;
  type?: string;
  buttonTag?: string;
  name?: string;
  placeholder?: string;
  inputId?: string;
  value?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export interface Type {
  types: 'button';
}

export interface ButtonProps {
  children?: React.ReactNode;
}

export interface InputStyle {
  [key: string]: {
    width: string;
    height?: string;
    fontSize?: string;
    boxShadow?: string;
    border?: string;
    padding?: string;
    margin?: string;
  };
}

export interface CssProps {
  types: Type['types'];
  Bgcolor?: string;
  border?: string;
  style?: React.CSSProperties;
}
