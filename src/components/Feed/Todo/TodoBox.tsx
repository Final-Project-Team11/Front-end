import React from 'react';
import { StTodoBlock, StTodoAreaBlock } from './style';
import { StCircleBlock, StTestDeleteBlock } from '../style';
import { TodoBoxProps } from './interfaces';

const TodoBox = ({ content, isDone }: TodoBoxProps) => {
  return (
    <StTodoBlock>
      <StTodoAreaBlock>
        <StCircleBlock />
        {content}
      </StTodoAreaBlock>
      <StTestDeleteBlock>x</StTestDeleteBlock>
    </StTodoBlock>
  );
};

export default TodoBox;
