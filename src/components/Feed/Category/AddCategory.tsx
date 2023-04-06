import React from 'react';
import { StCategoryInputBlock, StCategoryInput } from './style';
import { StCircleBlock } from '../style';

const AddCategory = () => {
  return (
    <StCategoryInputBlock>
      <StCircleBlock />
      <StCategoryInput type="text" maxLength={10} />
    </StCategoryInputBlock>
  );
};

export default AddCategory;
