import React from 'react';
import { StTodoBlock, StTodoInput } from './style';
import { StCircleBlock } from '../style';
import { AddTodoProps } from './interfaces';

const AddTodo = ({ value, setValue, onChange }: AddTodoProps) => {
  return (
    <StTodoBlock>
      <StCircleBlock />
      <StTodoInput type="text" maxLength={10} value={value} onChange={onChange} />
    </StTodoBlock>
  );
};

export default AddTodo;
