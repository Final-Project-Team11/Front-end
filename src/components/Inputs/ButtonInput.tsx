import React from 'react';
import {
  StCheckButton,
  StColumnBlock,
  StColumnInput,
  StInputButtonBlock,
  StInputLabel,
} from './style';
import useInput from '../../hooks/common/useInput';
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
}: InputProps) => {
  const [inputValue, handleChange] = useInput();

  return (
    <StColumnBlock types={types}>
      <StColumnBlock types={types}>
        <StInputLabel htmlFor={inputId}>{children}</StInputLabel>
        <StInputButtonBlock>
          <StColumnInput
            id={inputId}
            types={types}
            type={type}
            Bgcolor={Bgcolor}
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
          />
          <StCheckButton onClick={onClick}>{buttonTag}</StCheckButton>
        </StInputButtonBlock>
      </StColumnBlock>
    </StColumnBlock>
  );
};

export default ButtonInput;
