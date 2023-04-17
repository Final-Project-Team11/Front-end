import styled from 'styled-components';

interface RequestStatusProps {
  status: boolean;
}

export const StVacateBlock = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StSpanBlock = styled.div`
  width: 65%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StVacateSpan = styled.span`
  font-size: 15px;
`;

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

export const StAcceptBlock = styled.div<RequestStatusProps>`
  /* color: ${({ status }) => (status ? 'green' : 'red')}; */

  color: gray;
  width: 24px;
  height: 24px;

  font-size: 24px;
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
  background-color: red;

  width: 24px;
  height: 24px;
  border-radius: 20px;
  margin-right: 10px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border: 1px solid red;
  transition: width 0.3s ease-out;
  &:hover {
    width: 50px;
  }

  &:hover .decision {
    opacity: 1;
  }
`;

// 선택 블럭 호버 시 나오는 요소 블럭 안의 승인
export const StDecAcceptBlock = styled.div<RequestStatusProps>`
  background-color: white;
  color: ${({ status }) => (status ? 'green' : 'red')};

  font-size: 20px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  transition: 0.3s;
  /* &:hover {
    background-color: green;
  } */
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
  /* &:hover {
    background-color: #fb6e52;
  } */
`;
