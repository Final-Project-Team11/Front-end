import React, { useEffect, useRef } from 'react';
// 스타일, 인터페이스
import * as UI from './style';
import { AddTodoProps, SentTodo } from '../interfaces';
// 서버 요청
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
  }, []);

  // 투두 추가 요청
  const { postTodo } = usePostTodo();
  // 요청 payload
  const todo: SentTodo = {
    categoryId: categoryId,
    content: {
      content: value,
    },
  };

  // Enter 누를 시 value값 있다면 post 요청, 인풋 비우며 닫음
  const pressEnterHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value !== '') {
        postTodo(todo);
        setValue('');
        inputHandler(false);
      }
    }
  };
  // 인풋에서 포커스 사라지면 input 저장, 닫힘
  const blurHandler = () => {
    if (value) {
      postTodo(todo);
      setValue('');
      inputHandler(false);
    } else {
      setValue('');
      inputHandler(false);
    }
  };

  return (
    <UI.StTodoAreaBlock>
      <UI.StCircleBlock />
      <UI.StTodoInput
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={pressEnterHandle}
        onBlur={blurHandler}
      />
    </UI.StTodoAreaBlock>
  );
};

export default AddTodo;
