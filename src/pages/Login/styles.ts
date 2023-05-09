import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const StBlock = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const StSignupSpan = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: ${COLOR.POINT_C};
`;

export const SubmitForm = styled.form`
  width: 430px;
  height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 30px;
`;

export const TextWrapper = styled.div`
  width: 430px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 45px 0 13px 0;
`;

interface TapButtonProps {
  isSelected: boolean;
}

export const TabButton = styled.div<TapButtonProps>`
  width: 200px;
  height: 43px;
  background: ${({ isSelected }) =>
    isSelected ? `${COLOR.POINT_C}` : `${COLOR.LIGHTGRAY}`};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'lighter')};
  font-size: ${({ isSelected }) => (isSelected ? '18px' : '15px')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : `${COLOR.GRAY1}`)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const StH1 = styled.h1`
  font-size: 30px;
  font-weight: bolder;
  color: ${COLOR.POINT_C};
  margin-bottom: 15px;
`;

export const StSpan = styled.span`
  font-size: 12px;
  color: ${COLOR.GRAY2};
`;
