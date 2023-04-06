import styled from 'styled-components';
// 공통

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeedBox = styled.div`
  width: 400px;
  height: 700px;

  border: 1px solid black;

  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FeedTitleBox = styled.div`
  background-color: green;

  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Circle = styled.div`
  background-color: green;

  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const TestPlusButton = styled.div`
  font-size: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const FeedTitle = styled.h1`
  color: #dc3232;
`;

//

//categoryBox 에서 사용

export const CategoryDiv = styled.div`
  background-color: yellow;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.h3`
  background-color: #dc3232;
  width: fit-content;
  color: white;

  padding-left: 10px;
  padding-right: 13px;
  padding-top: 3px;
  padding-bottom: 3px;

  box-sizing: border-box;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Todo = styled.div`
  background-color: pink;
  width: 100%;
  height: 30px;

  padding-left: 10px;
  padding-right: 10px;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TestDeleteButton = styled.span``;

////////////////////////////////

// AddCategory
export const CategoryInputBox = styled.div`
  background-color: #c17f7f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;

export const CategoryInput = styled.input`
  background-color: #dc3232;
  width: auto;
  color: white;

  padding-left: 10px;
  padding-right: 13px;
  padding-top: 3px;
  padding-bottom: 3px;

  box-sizing: border-box;
  border-radius: 15px;
  border: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
`;
////////////////////////////////

// AddTodo
export const TodoInput = styled.input`
  border: none;
  font-size: 16px;
`;
