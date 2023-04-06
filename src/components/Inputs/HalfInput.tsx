import React from 'react';
import { StColumnBlock, StColumnInput, StInputLabel } from './style';
import useInput from '../../hooks/common/useInput';
import { InputProps } from './interfaces';

const HalfInput = ({
  types,
  children,
  Bgcolor,
  type,
  placeholder,
  inputId,
}: InputProps) => {
  const [inputValue, handleChange] = useInput();

  return (
    <StColumnBlock types={types}>
      <StColumnBlock types={types}>
        <StInputLabel htmlFor={inputId}>{children}</StInputLabel>
        <StColumnInput
          id={inputId}
          types={types}
          type={type}
          Bgcolor={Bgcolor}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </StColumnBlock>
    </StColumnBlock>
  );
};

export default HalfInput;
