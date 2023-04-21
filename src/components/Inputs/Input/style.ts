import styled, { css } from 'styled-components';
import { CssProps, InputStyle } from './interfaces';

const inputStyle: InputStyle = {
  login: {
    width: '430px',
    height: '50px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '15px',
    border: 'none',
    padding: '15px',
  },
  max: {
    width: '600px',
  },
  half: {
    width: '280px',
  },
  document: {
    width: '100%',
    height: '3rem',
    fontSize: '1.6rem',
  },
};

export const StColumnBlock = styled.div<CssProps>`
  display: flex;
  flex-direction: column;
`;

export const StInputLabel = styled.label<CssProps>`
  font-size: 16px;

  ${({ types }) =>
    types &&
    css`
      font-size: ${inputStyle[types].fontSize};
    `};
`;

export const StColumnInput = styled.input<CssProps>`
  ${({ types }) =>
    types &&
    css`
      ${inputStyle[types]}
    `};

  box-sizing: border-box;
  outline: none;

  /* &:focus {
    background-color: ${({ Bgcolor }) => Bgcolor && Bgcolor};
  } */
`;
