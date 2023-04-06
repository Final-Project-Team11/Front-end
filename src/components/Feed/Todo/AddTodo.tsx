import React from 'react';
import { StTodoBlock, StTodoAreaBlock, StTodoInput } from './style';
import { StCircleBlock } from '../style';

const AddTodo = () => {
  return (
    <StTodoBlock>
      <StTodoAreaBlock>
        <StCircleBlock />
        <StTodoInput type="text" maxLength={10} />
      </StTodoAreaBlock>
    </StTodoBlock>
  );
};

export default AddTodo;
