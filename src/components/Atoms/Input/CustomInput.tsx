import React from 'react';
import { StInput } from './style';

export interface InputProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
  type?: string;
  value?: string | number;
  inputType: 'login' | 'signup';
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      style,
      className,
      id,
      name,
      type,
      value,
      inputType,
      placeholder,
      onChange,
    }: InputProps,
    ref
  ) => {
    return (
      <StInput
        ref={ref}
        className={className}
        id={id}
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
