import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

interface RequestStatusProps {
  status: boolean;
}

interface SpanProps {
  status: 'accept' | 'deny' | 'submit';
}

export const StListBlock = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;

  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StSpanBlock = styled.div<SpanProps>`
  width: 65%;
  height: 100%;
  line-height: 20px;
  color: ${({ status }) => (status === 'submit' ? COLOR.PAGE_SPAN : COLOR.PAGE_DONE)};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StNormalSpan = styled.span``;

export const StSubmitBlock = styled.div`
  font-size: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StAcceptBlock = styled.span`
  color: gray;

  font-size: 21px;
  border-radius: 50%;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 선택 블럭 호버 시 나오는 요소 블럭
export const StDecideBlock = styled.div`
  position: absolute;
  right: 0;
  background-color: ${COLOR.PAGE_BLUE};

  width: 29px;
  height: 29px;
  border-radius: 20px;
  margin-right: 10px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  transition: width 0.3s ease-out;
  &:hover {
    width: 60px;
  }

  &:hover .decision {
    opacity: 1;
  }
`;

// 선택 블럭 호버 시 나오는 요소 블럭 안의 승인
export const StDecAcceptBlock = styled.div<RequestStatusProps>`
  background-color: white;
  color: ${({ status }) => (status ? COLOR.PAGE_BLUE : COLOR.VACATION_RED)};

  font-size: 21px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  transition: 0.3s;
`;

// 선택 블럭 호버 시 나오는 요소 블럭 안의 반려
export const StDecDenyBlock = styled.div`
  background-color: white;
  color: red;

  font-size: 20px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  transition: 0.3s;
`;
