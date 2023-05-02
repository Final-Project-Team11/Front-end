import React, { useState } from 'react';
import * as UI from './style';
import AddTodo from '../Todo/AddTodo';
import TodoBox from '../Todo/TodoBox';
import { Category } from '../interfaces';
import useInput from '../../../hooks/common/useInput';

import { BsX } from '@react-icons/all-files/bs/BsX';
import { useDeleteFeed } from '../../../api/hooks/Feed/useDeleteFeed';
import { recoilTabState } from '../../../states/recoilTabState';
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';
import { COLOR } from '../../../styles/colors';

const CategoryBox = ({ categoryId, categoryName, todos }: Category) => {
  const [openTodoInput, setOpenTodoInput] = useState<boolean>(false);
  const [AddTodoState, setAddTodoHandler, setAddTodoState] = useInput(15);
  const tab = useRecoilValue(recoilTabState);

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

  const { deleteFeed } = useDeleteFeed();

  // 삭제버튼 클릭 시 더블체크
  const deleteBtnHandler = () => {
    Swal.fire({
      title: '카테고리를 삭제하시겠어요?',
      text: '하위 카테고리도 삭제됩니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: COLOR.VACATION_RED,
      cancelButtonColor: COLOR.PAGE_BLUE,
      confirmButtonText: '삭제할래요!',
      cancelButtonText: '아니요, 삭제 안할래요!',
    }).then(result => {
      if (result.isConfirmed) {
        deleteFeed({ type: 'category', id: categoryId });
      }
    });
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
