import styled from 'styled-components';

export const StCategoryBlock = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  margin-bottom: 5px;
`;

export const StCategoryWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StDeleteBlock = styled.div`
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StCategoryTitleBlock = styled.div`
  background-color: #dc3232;
  width: fit-content;
  height: 30px;

  padding-left: 10px;
  padding-right: 10px;

  box-sizing: border-box;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StCategoryH3 = styled.span`
  height: 30px;

  padding-top: 2px;

  font-size: 20px;

  color: white;
  display: flex;
  align-items: center;
`;

export const StCircleBlock = styled.div`
  background-color: white;

  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StPlusBlock = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

// styles for AddCategory
export const StCategoryInputBlock = styled.div`
  background-color: #dc3232;
  width: fit-content;
  height: 30px;

  padding-left: 10px;
  padding-right: 10px;

  box-sizing: border-box;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StCategoryInput = styled.input`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  outline: none;
`;
/////////////////////////////////
