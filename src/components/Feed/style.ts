import styled from 'styled-components';
import { COLOR } from '../../styles/colors';
// 공통

export const StWrapperBlock = styled.div`
  width: 250px;
  height: 700px;

  display: flex;
  flex-direction: column;

  padding: 20px;
  gap: 35px;
  box-sizing: border-box;

  box-shadow: rgba(236, 241, 248, 0.4) 4px 0px 9px -2px;
`;

export const StFeedBlock = styled.div`
  width: 100%;
  height: 600px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StFeedTitleBlock = styled.div`
  width: 100%;
  height: fit-content;

  box-sizing: border-box;

  display: flex;
  justify-content: center;

  gap: 127px;
`;

export const StPlusSpan = styled.span`
  font-size: 20px;
  color: ${COLOR.PAGE_BLUE};

  cursor: pointer;
`;

export const StFeedTitleH1 = styled.h1`
  font-size: 30px;
  font-weight: 900;
  color: ${COLOR.PAGE_BLUE};
`;
