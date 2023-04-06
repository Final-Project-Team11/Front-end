import React from 'react';
import {
  StCheckButton,
  StColumnBlock,
  StColumnInput,
  StInputButtonBlock,
  StInputLabel,
} from './style';
import { InputProps } from './interfaces';

const ButtonInput = ({
  types,
  children,
  Bgcolor,
  buttonTag,
  type,
  onClick,
  placeholder,
  inputId,
  value,
  onChange,
}: InputProps) => {
  return (
    <StColumnBlock>
      <StInputLabel htmlFor={inputId}>{children}</StInputLabel>
      <StInputButtonBlock>
        <StColumnInput
          id={inputId}
          types={types}
          type={type}
          Bgcolor={Bgcolor}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <StCheckButton onClick={onClick}>{buttonTag}</StCheckButton>
      </StInputButtonBlock>
    </StColumnBlock>
  );
};

export default ButtonInput;
