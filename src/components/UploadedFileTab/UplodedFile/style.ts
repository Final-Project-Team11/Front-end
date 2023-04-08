import styled, { css } from 'styled-components';
import { CssProps } from './interfaces';

export const StTagsBlock = styled.div<CssProps>`
  width: 100%;
  height: fit-content;

  gap: 5px;

  display: flex;
  align-items: center;
  ${({ isChecked }) =>
    isChecked
      ? css`
          color: red;
          font-weight: bold;
        `
      : ''}
`;

export const StTagsSpan = styled.span`
  font-size: 15px;
`;
