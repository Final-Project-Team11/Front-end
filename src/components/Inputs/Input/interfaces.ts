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
}
export interface Type {
  types: 'max' | 'half' | 'document' | 'login';
}

export interface InputStyle {
  [key: string]: {
    width: string;
    height?: string;
    fontSize?: string;
    boxShadow?: string;
    border?: string;
    padding?: string;
  };
}

export interface CssProps {
  types: Type['types'];
  Bgcolor?: string;
  border?: string;
  style?: React.CSSProperties;
}
