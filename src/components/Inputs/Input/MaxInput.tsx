import React from 'react';
import { StColumnBlock, StColumnInput, StInputLabel } from './style';
import { InputProps } from './interfaces';

const MaxInput = ({
  types,
  children,
  Bgcolor,
  type,
  placeholder,
  inputId,
  value,
  onChange,
}: InputProps) => {
  return (
    <StColumnBlock types={types}>
      <StInputLabel types={types} htmlFor={inputId}>
        {children}
      </StInputLabel>
      <StColumnInput
        id={inputId}
        types={types}
        type={type}
        Bgcolor={Bgcolor}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StColumnBlock>
  );
};

export default MaxInput;
