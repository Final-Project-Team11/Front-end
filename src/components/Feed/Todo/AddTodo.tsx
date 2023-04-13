import React, { useEffect, useRef } from 'react';
import { SentTodo, StTodoBlock, StTodoInput } from './style';
import { StCircleBlock } from './style';
import { AddTodoProps } from './interfaces';
import { usePostTodo } from '../../../api/hooks/Feed/usePostTodo';

const AddTodo = ({
  value,
  setValue,
  onChange,
  inputHandler,
  categoryId,
}: AddTodoProps) => {
  // AddTodo 인풋 생기면 focus
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const { postTodo } = usePostTodo();

  const todo: SentTodo = {
    categoryId: categoryId,
    content: {
      content: value,
    },
  };

  // Enter 누를 시 post 요청, 인풋 비우며 닫음
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      postTodo(todo);
      setValue('');
      inputHandler(false);
    }
  };

  return (
    <StTodoBlock>
      <StCircleBlock />
      <StTodoInput
        ref={inputRef}
        type="text"
        maxLength={10}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
    </StTodoBlock>
  );
};

export default AddTodo;
