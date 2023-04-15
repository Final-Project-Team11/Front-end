import styled from 'styled-components';
// 공통

export const StWrapperBlock = styled.div`
  width: 260px;
  height: 600px;

  display: flex;
  flex-direction: column;

  border: 1px solid black;

  box-shadow: rgba(246, 211, 211, 0.4) 4px 0px 9px -2px;
`;

export const StFeedBlock = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 550px;

  padding: 20px;
  box-sizing: border-box;

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
  width: 260px;
  height: fit-content;

  padding: 20px 20px 10px 20px;
  box-sizing: border-box;

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
  cursor: pointer;
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
