import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import { AddCategoryProps, SentCategory } from './interfaces';
import { usePostCategory } from '../../../api/hooks/Feed/usePostCategory';

const AddCategory = ({ value, setValue, onChange, inputHandler }: AddCategoryProps) => {
  // AddCategory 인풋 생기면 focus
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const { postCategory } = usePostCategory();
  const category: SentCategory = {
    category: value,
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      postCategory(category);
      setValue('');
      inputHandler(false);
    }
  };

  return (
    <UI.StCategoryInputBlock>
      <UI.StCircleBlock />
      <UI.StCategoryInput
        ref={inputRef}
        type="text"
        maxLength={10}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
    </UI.StCategoryInputBlock>
  );
};

export default AddCategory;
