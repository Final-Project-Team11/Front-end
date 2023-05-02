import React from 'react';
import * as UI from './style';
import { BsX } from '@react-icons/all-files/bs/BsX';
import { useDeleteFeed } from '../../../api/hooks/Feed/useDeleteFeed';
import { useCheckTodo } from '../../../api/hooks/Feed/useCheckTodo';
import { Todo } from '../interfaces';
import { COLOR } from '../../../styles/colors';
import Swal from 'sweetalert2';

const TodoBox = ({ todo }: { todo: Todo }) => {
  const { deleteFeed } = useDeleteFeed();

  // 삭제버튼 클릭 시 더블체크
  const deleteBtnHandler = (): void => {
    Swal.fire({
      title: 'todo를 삭제하시겠어요?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: COLOR.VACATION_RED,
      cancelButtonColor: COLOR.PAGE_BLUE,
      confirmButtonText: '삭제할래요!',
      cancelButtonText: '아니요, 삭제 안할래요!',
    }).then(result => {
      if (result.isConfirmed) {
        deleteFeed({ type: 'todo', id: todo.todoId });
      }
    });
  };

  const { checkTodo } = useCheckTodo();

  //투두 체크
  const clickCircleHandler = () => {
    checkTodo(todo.todoId);
  };

  return (
    <UI.StTodoBlock>
      <UI.StTodoAreaBlock>
        <UI.StCircleBlock isDone={todo.isDone} onClick={clickCircleHandler} />
        <UI.StTodoSpan>{todo.todo}</UI.StTodoSpan>
      </UI.StTodoAreaBlock>
      <UI.StTestDeleteBlock className="deleteBlock" onClick={deleteBtnHandler}>
        <BsX />
      </UI.StTestDeleteBlock>
    </UI.StTodoBlock>
  );
};

export default TodoBox;
