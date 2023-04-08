import React from 'react';
import { StDeviderBlock, StUploadedBlock } from './style';
import UploadedFile from './UplodedFile';

const UploadedFileTab = () => {
  return (
    <StUploadedBlock>
      🗂️
      <StDeviderBlock />
      <UploadedFile />
    </StUploadedBlock>
  );
};

export default UploadedFileTab;
