import React from 'react';
import { StInput } from './style';

export interface InputProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string;
  type?: string;
  value?: string | number;
  inputType: 'login' | 'signup' | 'half';
  placeholder?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { style, name, type, value, inputType, placeholder, onChange, maxLength }: InputProps,
    ref
  ) => {
    return (
      <StInput
        maxLength={maxLength}
        ref={ref}
        inputType={inputType}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        style={style}
      />
    );
  }
);
export default CustomInput;
