import styled from 'styled-components';

export const StVacateBlock = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StSpanBlock = styled.div`
  background-color: azure;
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
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;

  border: 1px solid red;
`;
export const StAcceptBlock = styled.div`
  background-color: red;
  color: white;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StDenyBlock = styled.div`
  background-color: red;
  color: white;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid red;
`;

// 선택 블럭 호버 시 나오는 요소 블럭
export const StDecideBlock = styled.div`
  background-color: red;

  width: 60px;
  height: fit-content;
  border-radius: 20px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  gap: 5px;

  padding: 0 5px 0 5px;
  box-sizing: border-box;

  border: 1px solid red;
`;

// 선택 블럭 호버 시 나오는 요소 블럭 안의 승인
export const StDecAcceptBlock = styled.div`
  background-color: white;
  color: red;

  width: 24px;
  height: 24px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.5s;
  &:hover {
    background-color: green;
  }
`;

// 선택 블럭 호버 시 나오는 요소 블럭 안의 반려
export const StDecDenyBlock = styled.div`
  background-color: white;
  color: red;

  width: 24px;
  height: 24px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.5s;
  &:hover {
    background-color: orange;
  }
`;
