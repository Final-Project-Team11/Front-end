export interface ColumnInputProps {
  types: Type['types'];
  children?: React.ReactNode;
  Bgcolor?: string;
  background?: string;
  border?: string;
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
