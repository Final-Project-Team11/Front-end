import styled, { css } from 'styled-components';
import * as interfaces from './interfaces';

// Sizes 객체를 정의한다.
const sizes: interfaces.Sizes = {
  small: {
    width: '100px',
    height: '100px',
  },
  medium: {
    width: '300px',
    height: '300px',
  },
  large: {
    width: '500px',
    height: '500px',
  },
};

// StTextArea 컴포넌트를 정의한다.
export const StTextArea = styled.textarea<interfaces.CssProps>`
  ${({ inputSize }) =>
    inputSize &&
    css`
      width: ${sizes[inputSize].width};
      height: ${sizes[inputSize].height};
    `}
  ${({ color }) => (color ? color : 'purple')}
  ${({ background }) => (background ? background : 'white')}
  ${({ border }) => (border ? border : '1px solid black')};

  padding: 10px;
  // textarea 내의 텍스트를 상단으로 올려줌
`;
