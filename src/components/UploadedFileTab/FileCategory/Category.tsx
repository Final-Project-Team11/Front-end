import React from 'react';
import {
  StContentSpan,
  StDeviderBlock,
  StUploadedBlock,
  StUploadedFileBlock,
} from './style';
import { CategoryProps } from './interfaces';

const Category = ({ types, children }: CategoryProps) => {
  return (
    <StUploadedBlock>
      {children}
      <StDeviderBlock />
      <StUploadedFileBlock>
        <StContentSpan>`😵‍💫 | 이름`</StContentSpan>
        <StContentSpan>`📎 | 파일이름`</StContentSpan>
      </StUploadedFileBlock>
    </StUploadedBlock>
  );
};

export default Category;
