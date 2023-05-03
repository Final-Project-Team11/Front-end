import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const BackGround = styled.div`
  background-color: #f6f6f6;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StH1 = styled.h1`
  font-size: 50px;
  font-weight: bolder;
  color: #e64042;

  margin: 70px 0 70px;
`;

export const StForm = styled.form`
  margin: 0 auto 150px;
  padding: 80px;

  border-radius: 24px;
  box-sizing: border-box;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 30px;
`;

export const Svg = styled.div`
  display: flex;
`;

export const ErrorP = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  font-weight: bold;
  color: ${COLOR.POINT_C};
  margin: -15px 0;
`;
