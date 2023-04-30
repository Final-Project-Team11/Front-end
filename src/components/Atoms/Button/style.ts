import styled from 'styled-components';
import { ButtonProps } from './CustomButton';
import { COLOR } from '../../../styles/colors';

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
    border: 'none',

    cursor: 'pointer',
  },
  ModalButton: {
    backgroundColor: 'transparent',
    width: '70px',
    height: '26px',
    fontSize: '10px',
    color: `${COLOR.PAGE_BLUE}`,
    cursor: 'pointer',
    border: `1px solid ${COLOR.PAGE_BLUE}`,
    borderRadius: '19px',
    opacity: 1,
  },
  valid: {
    width: '145px',
    height: '50px',
    fontSize: '15px',
    padding: '15px',
    color: '#8AB2E0',
    fontWeight: 'bolder',
    borderRadius: '7px',
    backgroundColor: '#fff',
    border: '1px solid #BADAFF',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
  },
  submit: {
    width: '175px',
    height: '50px',
    fontSize: '15px',
    fontWeight: 'bolder',
    borderRadius: '7px',
    padding: '15px',
  },
  cUser: {
    width: '144px',
    height: '50px',
    fontSize: '15px',
    fontWeight: 'bolder',
    borderRadius: '7px',
    padding: '15px',
    border: '1px solid black',
    background: 'none',
  },
  cUserSubmit: {
    width: '215px',
    height: '50px',
    fontSize: '15px',
    color: '#fff',
    fontWeight: 'bolder',
    borderRadius: '7px',
    padding: '15px',
    background: `${COLOR.FONT_COLOR}`,
  },
};

export const StButton = styled.button.attrs<ButtonProps>(props => ({
  style: buttonTypes[props.buttonType],
}))<ButtonProps>`
  box-sizing: border-box;
`;
