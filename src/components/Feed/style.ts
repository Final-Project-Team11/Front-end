import styled from 'styled-components';
// 공통

export const StWrapperBlock = styled.div`
  width: 260px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StFeedBlock = styled.div`
  width: 400px;
  height: 600px;

  border: 1px solid black;

  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StFeedTitleBlock = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StCircleBlock = styled.div`
  background-color: green;

  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StTestPlusBlock = styled.div`
  font-size: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const StFeedTitleH1 = styled.h1`
  color: #dc3232;
`;

export const StTestDeleteBlock = styled.div``;
