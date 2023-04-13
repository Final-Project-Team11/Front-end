import React, { useState } from 'react';
import * as UI from './style';
import AddTodo from '../Todo/AddTodo';
import TodoBox from '../Todo/TodoBox';
import { CategoryBoxProps } from './interfaces';
import useInput from '../../../hooks/common/useInput';

import { BsX } from 'react-icons/bs';

const CategoryBox = ({ categoryId, categoryName, todos }: CategoryBoxProps) => {
  const [openTodoInput, setOpenTodoInput] = useState<boolean>(false);
  const [AddTodoState, setAddTodoHandler, setAddTodoState] = useInput();
  const [showCategoryDeleteBtn, setShowCategoryDeleteBtn] = useState<boolean>(false);

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

  // todos 정렬 - isDone false 를 위로, true 를 아래로
  if (todos.length !== 0) {
    todos.sort((a, b) => {
      if (a.isDone === b.isDone) {
        return 0;
      } else if (a.isDone === false) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  return (
    <>
      <UI.StCategoryWrapper
        onMouseEnter={() => setShowCategoryDeleteBtn(true)}
        onMouseLeave={() => setShowCategoryDeleteBtn(false)}
      >
        <UI.StCategoryTitleBlock>
          <UI.StCircleBlock />
          <UI.StCategoryH3>{categoryName}</UI.StCategoryH3>
        </UI.StCategoryTitleBlock>
        {showCategoryDeleteBtn && (
          <UI.StDeleteBlock>
            <BsX />
          </UI.StDeleteBlock>
        )}
      </UI.StCategoryWrapper>
      <UI.StCategoryBlock>
        {todos?.map(todo => {
          return <TodoBox key={todo.todoId} todo={todo} />;
        })}
      </UI.StCategoryBlock>
      {openTodoInput && (
        <AddTodo
          value={AddTodoState}
          setValue={setAddTodoState}
          onChange={setAddTodoHandler}
          inputHandler={setOpenTodoInput}
          categoryId={categoryId}
        />
      )}
      <UI.StPlusBlock onClick={TodoPlusHandler}>+</UI.StPlusBlock>
    </>
  );
};

export default CategoryBox;
