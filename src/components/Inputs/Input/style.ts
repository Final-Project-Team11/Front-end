import styled, { css } from 'styled-components';
import { CssProps, InputStyle } from './interfaces';

const inputStyle: InputStyle = {
  max: {
    width: '600px',
  },
  half: {
    width: '280px',
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
  height: 16px;
  padding: 10px 10px 10px 10px;
  &:focus {
    background-color: ${({ Bgcolor }) => Bgcolor && Bgcolor};
  }
`;
