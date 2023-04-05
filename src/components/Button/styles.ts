import styled, { css } from 'styled-components';
import * as interfaces from './interfaces';

const sizes: interfaces.Sizes = {
  example: {
    width: '300px',
    height: '50px',
  },
};

export const StButton = styled.button<interfaces.CssProps>`
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
    `}

  color: ${({ color }) => (color ? color : 'yellow')};
  background: ${({ background }) => (background ? background : 'lightgray')};
  border: ${({ boarder }) => (boarder ? boarder : 'none')};
`;
