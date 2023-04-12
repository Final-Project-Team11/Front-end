import React, { useEffect, useRef } from 'react';
import { StTodoBlock, StTodoInput } from './style';
import { StCircleBlock } from './style';
import { AddTodoProps } from './interfaces';

const AddTodo = ({ value, setValue, onChange }: AddTodoProps) => {
  // AddTodo 인풋 생기면 focus
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <StTodoBlock>
      <StCircleBlock />
      <StTodoInput
        ref={inputRef}
        type="text"
        maxLength={10}
        value={value}
        onChange={onChange}
      />
    </StTodoBlock>
  );
};

export default AddTodo;
