import styled, { css } from 'styled-components';
import { CssProps, InputStyle } from './interfaces';

const inputStyle: InputStyle = {
  button: {
    width: '600px',
  },
  valid: {
    width: '600px',
  },
};

export const StColumnBlock = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StInputLabel = styled.label`
  font-size: 16px;
`;

export const StColumnInput = styled.input<CssProps>`
  width: 480px;
  height: 16px;
  padding: 10px 10px 10px 10px;
  &:focus {
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
