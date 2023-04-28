import styled from 'styled-components';
import { ButtonProps } from './CustomButton';

type ButtonType = {
  [key in ButtonProps['buttonType']]: React.CSSProperties;
};

const buttonTypes: ButtonType = {
  login: {
    width: '430px',
    height: '50px',
    fontSize: '15px',
    padding: '15px',
    color: '#E64042',
    fontWeight: 'bolder',
    borderRadius: '7px',
    backgroundColor: '#F6F6F6',
    border: 'none',
  },
  signup: {
    width: '595px',
    height: '50px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '15px',
    border: 'none',
    padding: '15px',
  },
  Detail: {
    width: '100px',
    height: '40px',
    color: 'black',
    borderRadius: '5px',
  },
};

export const StButton = styled.button.attrs<ButtonProps>(props => ({
  style: buttonTypes[props.buttonType],
}))<ButtonProps>`
  box-sizing: border-box;
`;
