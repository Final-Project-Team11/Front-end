import React, { useContext, useState } from 'react';
import * as UI from './style';
import AddTodo from '../Todo/AddTodo';
import TodoBox from '../Todo/TodoBox';
import { CategoryBoxProps } from './interfaces';
import useInput from '../../../hooks/common/useInput';

import { BsX } from 'react-icons/bs';
import { useDeleteCategory } from '../../../api/hooks/Feed/useDeleteCategory';
import { TabContext } from '../../../pages/Main/Main';

const CategoryBox = ({ categoryId, categoryName, todos }: CategoryBoxProps) => {
  const [openTodoInput, setOpenTodoInput] = useState<boolean>(false);
  const [AddTodoState, setAddTodoHandler, setAddTodoState] = useInput(15);
  const tab = useContext(TabContext);

  // category 내부의 + 버튼 눌렀을 때의 function
  const TodoPlusHandler = () => {
    // input이 닫혀있다면 열림
    if (!openTodoInput) {
      setOpenTodoInput(true);
    }
    // 인풋이 열려있고, input이 비어있지 않다면 post 동작, input 비움
    else if (openTodoInput === true && AddTodoState.length !== 0) {
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

  const { deleteCategory } = useDeleteCategory();

  const deleteBtnHandler = () => {
    deleteCategory(categoryId);
  };

  return (
    <>
      <UI.StCategoryWrapper>
        <UI.StCategoryTitleBlock tab={tab}>
          <UI.StCircleBlock />
          <UI.StCategoryH3>{categoryName}</UI.StCategoryH3>
        </UI.StCategoryTitleBlock>
        <UI.StPlusBlock onMouseDown={TodoPlusHandler}>+</UI.StPlusBlock>
        <UI.StDeleteBlock className="deleteBlock" onClick={deleteBtnHandler}>
          <BsX />
        </UI.StDeleteBlock>
      </UI.StCategoryWrapper>
      <UI.StCategoryBlock>
        {todos?.map(todo => {
          return <TodoBox key={todo.todoId} todo={todo} />;
        })}
        {openTodoInput && (
          <AddTodo
            value={AddTodoState}
            setValue={setAddTodoState}
            onChange={setAddTodoHandler}
            inputHandler={setOpenTodoInput}
            categoryId={categoryId}
          />
        )}
      </UI.StCategoryBlock>
    </>
  );
};

export default CategoryBox;
