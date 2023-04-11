import React, { useEffect, useState } from 'react';
import {
  StCategoryBlock,
  StCategoryH3,
  StCategoryTitleBlock,
  StCircleBlock,
  StPlusBlock,
} from './style';
import AddTodo from '../Todo/AddTodo';
import TodoBox from '../Todo/TodoBox';
import { CategoryBoxProps } from './interfaces';
import useInput from '../../../hooks/common/useInput';
import { usePostTodo } from '../../../api/hooks/Feed/usePostTodo';

const CategoryBox = ({ category, todos }: CategoryBoxProps) => {
  const [openTodoInput, setOpenTodoInput] = useState<boolean>(false);
  const [AddTodoState, setAddTodoHandler, setAddTodoState] = useInput();

  // category 내부의 + 버튼 눌렀을 때의 function
  const TodoPlusHandler = () => {
    // input이 닫혀있다면 열림
    if (!openTodoInput) {
      setOpenTodoInput(true);
    }
    // 인풋이 열려있고, input이 비어있지 않다면 post 동작, input 비움
    else if (openTodoInput === true && AddTodoState.length !== 0) {
      console.log('value 있음, 쿼리동작');
      setAddTodoState('');
      setOpenTodoInput(false);
    }
    // 인풋이 열려있지만, 비어있다면 인풋 닫음
    else setOpenTodoInput(false);
  };

  return (
    <>
      <StCategoryTitleBlock>
        <StCircleBlock />
        <StCategoryH3>{category}</StCategoryH3>
      </StCategoryTitleBlock>
      <StCategoryBlock>
        {todos?.map(todo => {
          return <TodoBox key={todo.todoId} todo={todo.todo} isDone={todo.isDone} />;
        })}
      </StCategoryBlock>
      {openTodoInput && (
        <AddTodo
          value={AddTodoState}
          setValue={setAddTodoState}
          onChange={setAddTodoHandler}
        />
      )}
      <StPlusBlock onClick={TodoPlusHandler}>+</StPlusBlock>
    </>
  );
};

export default CategoryBox;
