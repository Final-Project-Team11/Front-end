import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import { AddCategoryProps, SentCategory } from '../interfaces';
import { usePostCategory } from '../../../api/hooks/Feed/usePostCategory';
import { recoilTabState } from '../../../states/recoilTabState';
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';
import { COLOR } from '../../../styles/colors';

const AddCategory = ({ value, setValue, onChange, inputHandler }: AddCategoryProps) => {
  // AddCategory 인풋 생기면 focus
  const inputRef = useRef<HTMLInputElement>(null);
  const tab = useRecoilValue(recoilTabState);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { postCategory } = usePostCategory();
  const category: SentCategory = {
    category: value,
  };

  // Enter 누를 시 value값 있다면 post 요청, 인풋 비우며 닫음
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value !== '') {
        postCategory(category);
        setValue('');
        inputHandler(false);
      }
    }
  };

  // 인풋에서 포커스 사라지면 내용 없을 시 input 닫힘
  // 내용 있을 시 sweetAlert로 정말 작성 취소할건지 체크
  const blurHandler = () => {
    if (value) {
      Swal.fire({
        title: '카테고리 작성을 취소하시겠어요?',
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
        } else if (!result.isConfirmed) {
          postCategory(category);
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
    <UI.StCategoryInputBlock tab={tab}>
      <UI.StCircleBlock />
      <UI.StCategoryInput
        ref={inputRef}
        type="text"
        maxLength={10}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        onBlur={blurHandler}
      />
    </UI.StCategoryInputBlock>
  );
};

export default AddCategory;
