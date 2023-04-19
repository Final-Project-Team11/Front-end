import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const StCardBlock = styled.div`
  background-color: ${COLOR.PAGE_LIGHTBLUE};

  width: 250px;
  height: 116px;

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

export const StProfileBlock = styled.div`
  background-color: black;
  width: 55px;
  height: 55px;

  margin-bottom: 20px;

  border-radius: 50%;
`;
