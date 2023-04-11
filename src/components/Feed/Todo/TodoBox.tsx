import React from 'react';
import { StTodoBlock, StTodoAreaBlock } from './style';
import { StCircleBlock, StTestDeleteBlock } from '../style';
import { TodoBoxProps } from './interfaces';

const TodoBox = ({ todo, isDone }: TodoBoxProps) => {
  return (
    <StTodoBlock>
      <StTodoAreaBlock isDone={isDone}>
        <StCircleBlock />
        {todo}
      </StTodoAreaBlock>
      <StTestDeleteBlock>x</StTestDeleteBlock>
    </StTodoBlock>
  );
};

export default TodoBox;
