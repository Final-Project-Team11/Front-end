import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import { StCircleBlock } from './style';
import { AddTodoProps, SentTodo } from '../interfaces';
import { usePostTodo } from '../../../api/hooks/Feed/usePostTodo';
import Swal from 'sweetalert2';
import { COLOR } from '../../../styles/colors';

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

  const { postTodo } = usePostTodo();

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
  // 인풋에서 포커스 사라지면 input 닫힘
  const blurHandler = () => {
    if (value) {
      Swal.fire({
        title: '투두 작성을 취소하시겠어요?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: COLOR.VACATION_RED,
        cancelButtonColor: COLOR.PAGE_BLUE,
        confirmButtonText: '취소할래요!',
        cancelButtonText: '아니요, 저장할 거에요!',
      }).then(result => {
        if (result.isConfirmed) {
          setValue('');
          inputHandler(false);
        } else {
          postTodo(todo);
          setValue('');
          inputHandler(false);
        }
      });
    } else {
      setValue('');
      inputHandler(false);
    }
  };

  return (
    <UI.StTodoAreaBlock>
      <StCircleBlock />
      <UI.StTodoInput
        ref={inputRef}
        type="text"
        maxLength={15}
        value={value}
        onChange={onChange}
        onKeyPress={pressEnterHandle}
        onBlur={blurHandler}
      />
    </UI.StTodoAreaBlock>
  );
};

export default AddTodo;
