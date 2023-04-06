import React from 'react';
import {
  StCheckButton,
  StColumnBlock,
  StColumnInput,
  StInputButtonBlock,
  StInputLabel,
} from './style';
import useInput from '../../hooks/common/useInput';
import { ColumnInputProps } from './interfaces';

const ColumnInput = ({
  types,
  children,
  Bgcolor,
  buttonTag,
  type,
  onClick,
  placeholder,
}: ColumnInputProps) => {
  const [inputValue, handleChange] = useInput();

  return (
    <StColumnBlock types={types}>
      {(() => {
        switch (types) {
          case 'maxInput':
            return (
              <StColumnBlock types={types}>
                <StInputLabel htmlFor="Max">{children}</StInputLabel>
                <StColumnInput
                  id="Max"
                  types={types}
                  type={type}
                  Bgcolor={Bgcolor}
                  value={inputValue}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              </StColumnBlock>
            );
          case 'halfInput':
            return (
              <StColumnBlock types={types}>
                <StInputLabel htmlFor="Half">{children}</StInputLabel>
                <StColumnInput
                  id="Half"
                  types={types}
                  type={type}
                  Bgcolor={Bgcolor}
                  value={inputValue}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              </StColumnBlock>
            );
          case 'buttonInput':
            return (
              <StColumnBlock types={types}>
                <StInputLabel htmlFor="Button">{children}</StInputLabel>
                <StInputButtonBlock>
                  <StColumnInput
                    id="Button"
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
            );
          case 'validationInput':
            return (
              <StColumnBlock types={types}>
                <StInputLabel htmlFor="Valid">{children}</StInputLabel>
                <StInputButtonBlock>
                  <StColumnInput
                    id="Valid"
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
            );
          default:
            return null;
        }
      })()}
    </StColumnBlock>
  );
};

export default ColumnInput;
