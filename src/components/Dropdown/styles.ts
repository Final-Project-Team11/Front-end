import styled, {css} from 'styled-components'
import * as interfaces from './interfaces'

const sizes : interfaces.Sizes = {
    small : {
        width : '100px',
        height : '50px'
    },
    medium : {
        width : '276px',
        height : '86px'
    }
}

export const StUl = styled.ul<interfaces.CssProps>`
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
    `};
  color: ${({ color }) => (color ? color : 'black')};
  background: ${({ background }) => (background ? background : 'white')};
  border : ${({border})=>(border ? border : '1px solid black')};
  box-sizing : border-box;
  
  display: flex;
  flex-direction: row;
  flex-wrap : wrap;
  align-items : center;
  justify-content : center;

`

export const StLi = styled.li<interfaces.CssProps>`
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
    `};
  color: ${({ color }) => (color ? color : 'black')};
  background: ${({ background }) => (background ? background : 'white')};
  border : ${({border})=>(border ? border : '1px solid black')};
  box-sizing : border-box;

  display: flex;
  align-items : center;
  justify-content : center;
`