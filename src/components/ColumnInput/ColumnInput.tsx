import React from 'react';
import { StColumnInput } from './style';
import useInput from '../../hooks/common/useInput';
import { ColumnInputProps } from './interfaces';

const ColumnInput = ({
  types,
  children,
  Bgcolor,
  background,
  border,
}: ColumnInputProps) => {
  const [inputValue, handleChange] = useInput();

  return (
    <>
      <StColumnInput
        types={types}
        Bgcolor={Bgcolor}
        background={background}
        border={border}
        value={inputValue}
        onChange={handleChange}
      >
        {children}
      </StColumnInput>
    </>
  );
};

export default ColumnInput;
