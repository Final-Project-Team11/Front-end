import styled from 'styled-components';
// 공통

export const StWrapperBlock = styled.div`
  width: 260px;
  height: 600px;
  display: flex;

  border: 1px solid black;

  overflow-y: auto;
  box-shadow: rgba(251, 110, 82, 0.2) 10px 0px 10px 0px;

  ::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
    &:hover {
      background-color: grey;
    }
  }
  ::-webkit-scrollbar-thumb {
    background-color: red;
  }
`;

export const StFeedBlock = styled.div`
  width: 400px;
  height: fit-content;

  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StFeedTitleBlock = styled.div`
  width: 95%;
  height: fit-content;

  margin: 5px;
  margin-bottom: 10px;

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

export const StPlusBlock = styled.div`
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const StFeedTitleH1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #dc3232;
`;

export const StTestDeleteBlock = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
