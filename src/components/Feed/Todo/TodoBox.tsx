import React from 'react';
import { StTodoBlock, StTodoAreaBlock } from './style';
import { StCircleBlock, StTestDeleteBlock } from '../style';

const TodoBox = () => {
  return (
    <StTodoBlock>
      <StTodoAreaBlock>
        <StCircleBlock />
        할일
      </StTodoAreaBlock>
      <StTestDeleteBlock>x</StTestDeleteBlock>
    </StTodoBlock>
  );
};

export default TodoBox;
