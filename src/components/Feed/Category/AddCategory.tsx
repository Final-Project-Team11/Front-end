import React, { useContext, useEffect, useRef } from 'react';
import * as UI from './style';
import { AddCategoryProps, SentCategory } from './interfaces';
import { usePostCategory } from '../../../api/hooks/Feed/usePostCategory';
import { ChangeTabContext } from '../../../api/hooks/Main/useTabContext';

const AddCategory = ({ value, setValue, onChange, inputHandler }: AddCategoryProps) => {
  // AddCategory 인풋 생기면 focus
  const inputRef = useRef<HTMLInputElement>(null);
  const [tab] = useContext(ChangeTabContext);
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
  // 인풋에서 포커스 사라지면 input 닫힘
  const blurHandler = () => {
    setValue('');
    inputHandler(false);
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
