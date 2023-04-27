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
    border: 'none',
    padding: '15px',
  },
  signup: {
    width: '595px',
    height: '50px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '15px',
    border: 'none',
    padding: '15px',
  },
};

export const StInput = styled.input.attrs<InputProps>(props => ({
  style: inputTypes[props.inputType],
}))<InputProps>`
  box-sizing: border-box;
`;
