import React from 'react';
import * as UI from './style';
import { BsX } from '@react-icons/all-files/bs/BsX';
import { useDeleteFeed } from '../../../api/hooks/Feed/useDeleteFeed';
import { useCheckTodo } from '../../../api/hooks/Feed/useCheckTodo';
import { Todo } from '../interfaces';

const TodoBox = ({ todo }: { todo: Todo }) => {
  const { deleteFeed } = useDeleteFeed();

  //투두 삭제
  const deleteBtnHandler = (): void => {
    deleteFeed({ type: 'todo', id: todo.todoId });
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
