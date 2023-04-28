import styled, { css } from 'styled-components';
import * as interfaces from './interfaces';
import { UlStyleProps } from '../Main/DocumentForm/components/HashTag/interfaces';

const sizes: interfaces.Sizes = {
  small: {
    width: '100px',
    height: '50px',
  },
  medium: {
    width: '276px',
    height: '86px',
  },
};

export const StBlock = styled.div<interfaces.CssProps>`
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
    `};
  color: ${({ color }) => (color ? color : 'black')};
  background: ${({ background }) => (background ? background : 'white')};
  border: ${({ border }) => (border ? border : '1px solid black')};
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const StLi = styled.li<interfaces.CssProps>`
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
    `};
  color: ${({ color }) => (color ? color : 'black')};
  background: ${({ background }) => (background ? background : 'white')};
  border: ${({ border }) => (border ? border : '1px solid black')};
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

export const StUlBlock = styled.ul<UlStyleProps>`
  position: absolute;
  z-index: 100;
  background-color: white;
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-top: none;
  ${({ pos }) =>
    `top : ${pos.top + pos.height + 2}px; left :${pos.left}px; width:${pos.width - 1}px;`}
`;
