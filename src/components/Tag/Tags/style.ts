import styled, { css } from 'styled-components';
import { CssProps } from './interfaces';

export const StTagsBlock = styled.div<CssProps>`
  /* background-color: yellow; */
  width: 100%;
  height: 30px;

  overflow-x: hidden;
  overflow-y: hidden;

  margin-bottom: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${({ isChecked }) =>
    isChecked
      ? css`
          color: red;
          font-weight: bold;
        `
      : ''}
`;

export const StTagsSpan = styled.span`
  font-size: 20px;
`;
