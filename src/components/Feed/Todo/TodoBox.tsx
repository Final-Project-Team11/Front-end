import React from 'react';
import * as UI from './style';

import { TodoBoxProps } from './interfaces';
import { BsX } from 'react-icons/bs';
import { useDeleteTodo } from '../../../api/hooks/Feed/useDeleteTodo';
import { useCheckTodo } from '../../../api/hooks/Feed/useCheckTodo';

const TodoBox = ({ todo }: TodoBoxProps) => {
  const { deleteTodo } = useDeleteTodo();

  //투두 삭제
  const deleteBtnHandler = (): void => {
    deleteTodo(todo.todoId);
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
