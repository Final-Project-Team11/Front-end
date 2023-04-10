import React, { useState } from 'react';
import { StCategoryBlock, StCategoryH3 } from './style';
import { StCircleBlock, StTestPlusBlock } from '../style';
import AddTodo from '../Todo/AddTodo';
import TodoBox from '../Todo/TodoBox';
import { CategoryBoxProps } from './interfaces';

const CategoryBox = ({ category, todos }: CategoryBoxProps) => {
  const [openTodoInput, setOpenTodoInput] = useState<boolean>(false);

  const TodoPlusHandler = () => {
    setOpenTodoInput(true);
  };

  console.log('!!!!!!!', todos);

  return (
    <StCategoryBlock>
      <StCategoryH3>
        <StCircleBlock />
        {category}
      </StCategoryH3>
      {todos?.map(todo => {
        return <TodoBox key={todo.todoId} content={todo.content} isDone={todo.isDone} />;
      })}
      {openTodoInput && <AddTodo />}
      <StTestPlusBlock onClick={TodoPlusHandler}>+</StTestPlusBlock>
    </StCategoryBlock>
  );
};

export default CategoryBox;
