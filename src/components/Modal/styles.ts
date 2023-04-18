import styled, { css } from 'styled-components';
import * as interfaces from './interfaces';

const sizes: interfaces.Sizes = {
  small: {
    width: '500px',
    height: '385px',
  },
  large: {
    width: '650px',
    height: '1000px',
  },
};

export const StModalBackground = styled.div<interfaces.CssProps>`
  z-index: 1500;

  width: 100%;
  height: 100%;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;

  background: ${({ background }) => (background ? background : 'rgba(0, 0, 0, 0.8)')};
`;

export const StModal = styled.div<interfaces.CssProps>`
  ${({ style }) => style && { ...style }}
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
    `};
  background: ${({ background }) => (background ? background : 'white')};
  z-index: 2000;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
