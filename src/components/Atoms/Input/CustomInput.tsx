import React from 'react';
import { StInput } from './style';

export interface InputProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string;
  type?: string;
  value?: string | number;
  inputType: 'login' | 'signup';
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  style,
  name,
  type,
  value,
  inputType,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <StInput
      inputType={inputType}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      style={style}
    />
  );
};

export default CustomInput;
