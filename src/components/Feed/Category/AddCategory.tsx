import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import { AddCategoryProps } from './interfaces';

const AddCategory = ({ value, onChange }: AddCategoryProps) => {
  // AddCategory 인풋 생기면 focus
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <UI.StCategoryInputBlock>
      <UI.StCircleBlock />
      <UI.StCategoryInput
        ref={inputRef}
        type="text"
        maxLength={10}
        value={value}
        onChange={onChange}
      />
    </UI.StCategoryInputBlock>
  );
};

export default AddCategory;
