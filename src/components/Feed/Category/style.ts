import styled from 'styled-components';

export const StCategoryBlock = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  margin-bottom: 5px;

  ::-webkit-scrollbar {
    width: 4px;
    background-color: gray;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #dc3232; /* 다른 색상으로 변경 */
  }
`;

export const StCategoryInputBlock = styled.div`
  background-color: #dc3232;
  width: fit-content;
  height: 30px;

  font-size: 20px;
  margin-bottom: 5px;

  padding-left: 13px;
  padding-right: 13px;

  box-sizing: border-box;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StCategoryInput = styled.input`
  width: 100px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
`;

export const StCategoryTitleBlock = styled.div`
  background-color: #dc3232;
  width: fit-content;
  height: 30px;
  color: white;

  font-size: 20px;

  padding-left: 13px;
  padding-right: 13px;

  box-sizing: border-box;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StCategoryH3 = styled.h3``;

export const StCircleBlock = styled.div`
  background-color: green;

  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StPlusBlock = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;
