import styled, { css } from 'styled-components';
import { CssProps, InputStyle } from './interfaces';

const inputStyle: InputStyle = {
  maxInput: {
    width: '600px',
  },
  halfInput: {
    width: '280px',
  },
  buttonInput: {
    width: '600px',
  },
  validationInput: {
    width: '600px',
  },
};

export const StColumnBlock = styled.div<CssProps>`
  ${({ types }) =>
    types &&
    css`
      ${inputStyle[types]}
    `};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StInputLabel = styled.label`
  font-size: 16px;
`;

export const StColumnInput = styled.input<CssProps>`
  width: ${({ types }) =>
    types === 'buttonInput' || types === 'validationInput' ? `480px` : null};
  height: 16px;
  padding: 10px 10px 10px 10px;
  &: focus {
    background-color: ${({ Bgcolor }) => Bgcolor && Bgcolor};
  }
`;

export const StInputButtonBlock = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StCheckButton = styled.button`
  width: 70px;
`;
