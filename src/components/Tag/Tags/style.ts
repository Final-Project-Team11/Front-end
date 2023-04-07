import styled, { css } from 'styled-components';
import { CssProps } from './interfaces';

export const StTagsBlock = styled.div`
  width: 100%;
  height: fit-content;

  gap: 5px;

  display: flex;
  align-items: center;
`;
export const StDeviderBlock = styled.div`
  height: 80%;
  width: 0;
  border: 1px solid black;
`;

export const StTagsSpan = styled.span<CssProps>`
  ${({ isChecked }) =>
    isChecked
      ? css`
          color: red;
          font-weight: bolder;
        `
      : ''}
`;
