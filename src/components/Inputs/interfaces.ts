export interface ColumnInputProps {
  types: Type['types'];
  children?: React.ReactNode;
  Bgcolor?: string;
  type?: string;
  buttonTag?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  placeholder?: string;
}

export interface ButtonProps {
  children?: React.ReactNode;
}

export interface Type {
  types: 'maxInput' | 'halfInput' | 'buttonInput' | 'validationInput';
}

export interface InputStyle {
  [key: string]: {
    width: string;
  };
}

export interface CssProps {
  types: Type['types'];
  Bgcolor?: string;
  background?: string;
  border?: string;
}
