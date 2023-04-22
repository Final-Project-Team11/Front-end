export interface InputProps {
  types: Type['types'];
  children?: React.ReactNode;
  Bgcolor?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  inputId?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLInputElement>;
}
export interface Type {
  types: 'max' | 'half' | 'document' | 'login' | 'signup';
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
