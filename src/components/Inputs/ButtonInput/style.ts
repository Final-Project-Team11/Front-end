import styled, { css } from 'styled-components';
import { CssProps, InputStyle } from './interfaces';

const inputStyle: InputStyle = {
  button: {
    width: '595px',
    height: '50px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '15px',
    border: 'none',
    padding: '15px',
    margin: '0 0 25px',
  },
};

export const StColumnBlock = styled.div`
  width: 755px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StInputLabel = styled.label`
  font-size: 16px;
  font-weight: bolder;
  color: #484240;
`;

export const StColumnInput = styled.input<CssProps>`
  ${({ types }) =>
    types &&
    css`
      ${inputStyle[types]}
    `};

  margin-top: 15px;
  box-sizing: border-box;
  outline: none;
`;

export const StInputButtonBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  gap: 15px;
`;

export const StCheckButton = styled.button`
  width: 145px;
  height: 50px;
  margin-top: 15px;

  border: 1px solid #badaff;
  border-radius: 7px;
  box-shadow: 0 4px 4px rgba(201, 201, 201, 0.25);
  box-sizing: border-box;

  background-color: #fff;
  text-align: center;
  font-size: 15px;
  color: #badaff;
  font-weight: bold;
`;
