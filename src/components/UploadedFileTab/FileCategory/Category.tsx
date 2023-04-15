import React from 'react';
import * as UI from './style';
import { CategoryProps } from './interfaces';

const Category = ({ fileList, children }: CategoryProps) => {
  return (
    <>
      <UI.StUploadedBlock>
        {children}
        <UI.StDeviderBlock />
        <UI.StInsideBlock>
          <UI.StUploadedFileBlock>
            <UI.StContentSpan>`😵‍💫 | 이름12341234`</UI.StContentSpan>
            <UI.StContentSpan>`📎 | 파일이름`</UI.StContentSpan>
          </UI.StUploadedFileBlock>
        </UI.StInsideBlock>
      </UI.StUploadedBlock>
    </>
  );
};

export default Category;
