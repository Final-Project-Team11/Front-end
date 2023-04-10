import React from 'react';
import { StTodoBlock, StTodoAreaBlock, StTodoInput } from './style';
import { StCircleBlock } from '../style';

const AddTodo = () => {
  return (
    <StTodoBlock>
      <StCircleBlock />
      <StTodoInput type="text" maxLength={10} />
    </StTodoBlock>
  );
};

export default AddTodo;
