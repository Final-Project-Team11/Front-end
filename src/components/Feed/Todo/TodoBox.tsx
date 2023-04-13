import React, { useState } from 'react';
import { StTodoBlock, StTodoAreaBlock, StCircleBlock, StTestDeleteBlock } from './style';

import { TodoBoxProps } from './interfaces';
import { BsX } from 'react-icons/bs';
import { useDeleteTodo } from '../../../api/hooks/Feed/useDeleteTodo';

const TodoBox = ({ todo }: TodoBoxProps) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState<boolean>(false);

  const { deleteTodo } = useDeleteTodo();

  const deleteBtnHandler = (): void => {
    deleteTodo(todo.todoId);
  };

  return (
    <StTodoBlock
      onMouseEnter={() => setShowDeleteBtn(true)}
      onMouseLeave={() => setShowDeleteBtn(false)}
    >
      <StTodoAreaBlock>
        <StCircleBlock isDone={todo.isDone} />
        {todo.todo}
      </StTodoAreaBlock>
      {showDeleteBtn && (
        <StTestDeleteBlock onClick={deleteBtnHandler}>
          <BsX />
        </StTestDeleteBlock>
      )}
    </StTodoBlock>
  );
};

export default TodoBox;
