import React from 'react';
import { StCategoryInputBlock, StCategoryInput } from './style';
import { StCircleBlock } from '../style';
import { AddCategoryProps } from './interfaces';

const AddCategory = ({ value, onChange, setValue }: AddCategoryProps) => {
  return (
    <StCategoryInputBlock>
      <StCircleBlock />
      <StCategoryInput type="text" maxLength={10} value={value} onChange={onChange} />
    </StCategoryInputBlock>
  );
};

export default AddCategory;
