import styled from 'styled-components';
import { COLOR } from '../../styles/colors';
import { color } from 'framer-motion';

interface CardStyleProps {
  tab?: number;
}

export const StCardBlock = styled.div<CardStyleProps>`
  background-color: ${({ tab }) =>
    tab === 0
      ? COLOR.SCHEDULE_BLUE
      : tab === 1
      ? COLOR.VACATION_RED
      : COLOR.PAGE_LIGHTBLUE};

  width: 250px;
  height: 116px;

  min-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 19px;
  box-sizing: border-box;

  box-shadow: rgba(212, 229, 249, 1) 0px 1px 9px -1px;
  text-shadow: 0px 1px 4px rgba(148, 177, 211, 0.94);
`;

export const StInfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  color: white;

  gap: 18px;
`;

export const StTeamNameH1 = styled.h1`
  font-size: 15px;
  font-weight: bold;
`;

export const StDateBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StInfoSpan = styled.span`
  font-size: 15px;
`;

export const StProfileImg = styled.div`
  background-color: white;
  width: 55px;
  height: 55px;

  margin-bottom: 20px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: 90%;
    object-fit: cover;
  }
`;
