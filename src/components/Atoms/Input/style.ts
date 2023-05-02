import styled from 'styled-components';
import { InputProps } from './CustomInput';

type InputTypes = {
  [key in InputProps['inputType']]: React.CSSProperties;
};

const inputTypes: InputTypes = {
  login: {
    width: '430px',
    height: '50px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '15px',
    borderRadius: '4px',
    border: 'none',
    padding: '15px',
    outline: 'none',
  },
  signup: {
    width: '595px',
    height: '50px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '15px',
    border: 'none',
    padding: '15px',
    outline: 'none',
  },
  cardInfo: {
    width: '120px',
    height: '32px',
    marginLeft: '10px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '10px',
    border: 'none',
    padding: '16px 13px',
    boxSizing: 'border-box',
    outline: 'none',
    borderRadius: '4px',
    textAlign: 'center',
  },
  title: {
    width: '400px',
    height: '50px',
    fontSize: '15px',
    border: 'none',
    outline: 'none',
  },
  author: {
    width: '200px',
    height: '50px',
    fontSize: '15px',
    border: 'none',
    outline: 'none',
    borderRadius: '4px',
  },
  half: {
    width: '290px',
    height: '50px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '15px',
    border: 'none',
    padding: '15px',
    borderRadius: '4px',
  },
};

export const StInput = styled.input.attrs<InputProps>(props => ({
  style: { ...inputTypes[props.inputType], ...props.style },
}))<InputProps>`
  box-sizing: border-box;
`;
