import styled, { css } from 'styled-components';
import { CssProps, InputStyle } from './interfaces';

const inputStyle: InputStyle = {
  maxInput: {
    width: '100%',
  },
  halfInput: {
    width: '45%',
  },
  buttonInput: {
    width: '100%',
  },
  validationInput: {
    width: '100%',
  },
};

export const StColumnInput = styled.input<CssProps>`
  ${({ types }) =>
    types &&
    css`
      ${inputStyle[types]}
    `};
  background-color: ${({ Bgcolor }) => Bgcolor && Bgcolor};
  height: 16px;
  padding: 10px 10px 10px 10px;
`;
