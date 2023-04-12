import React, { useEffect, useRef } from 'react';
import { StCategoryInputBlock, StCategoryInput } from './style';
import { StCircleBlock } from '../style';
import { AddCategoryProps } from './interfaces';

const AddCategory = ({ value, onChange, setValue }: AddCategoryProps) => {
  // AddCategory 인풋 생기면 focus
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <StCategoryInputBlock>
      <StCircleBlock />
      <StCategoryInput
        ref={inputRef}
        type="text"
        maxLength={10}
        value={value}
        onChange={onChange}
      />
    </StCategoryInputBlock>
  );
};

export default AddCategory;
