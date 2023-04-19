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
}
export interface Type {
  types: 'max' | 'half' | 'document';
}

export interface InputStyle {
  [key: string]: {
    width: string;
    height?: string;
    fontSize?: string;
  };
}

export interface CssProps {
  types: Type['types'];
  Bgcolor?: string;
  border?: string;
}
