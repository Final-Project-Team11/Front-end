import React, { useState } from 'react';
import * as UI from './style';
import AddTodo from './AddTodo';

const CategoryBox = () => {
  const [openTodoInput, setOpenTodoInput] = useState<boolean>(false);

  const TodoPlusHandler = () => {
    setOpenTodoInput(prev => !prev);
  };

  return (
    <UI.CategoryDiv>
      <UI.Category>
        <UI.Circle />
        카테고리
      </UI.Category>
      <UI.Todo>
        <UI.TodoBox>
          <UI.Circle />
          할일
        </UI.TodoBox>
        <UI.TestDeleteButton>x</UI.TestDeleteButton>
      </UI.Todo>
      {openTodoInput && <AddTodo />}
      <UI.TestPlusButton onClick={TodoPlusHandler}>+</UI.TestPlusButton>
    </UI.CategoryDiv>
  );
};

export default CategoryBox;
