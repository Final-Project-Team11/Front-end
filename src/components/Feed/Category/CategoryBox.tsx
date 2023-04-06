import React, { useState } from 'react';
import { StCategoryBlock, StCategoryH3 } from './style';
import { StCircleBlock, StTestPlusBlock } from '../style';
import AddTodo from '../Todo/AddTodo';
import TodoBox from '../Todo/TodoBox';

const CategoryBox = () => {
  const [openTodoInput, setOpenTodoInput] = useState<boolean>(false);

  const TodoPlusHandler = () => {
    setOpenTodoInput(prev => !prev);
  };

  return (
    <StCategoryBlock>
      <StCategoryH3>
        <StCircleBlock />
        카테고리
      </StCategoryH3>
      <TodoBox />
      {openTodoInput && <AddTodo />}
      <StTestPlusBlock onClick={TodoPlusHandler}>+</StTestPlusBlock>
    </StCategoryBlock>
  );
};

export default CategoryBox;
