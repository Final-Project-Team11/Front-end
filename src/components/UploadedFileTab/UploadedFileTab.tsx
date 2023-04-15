import React, { useEffect, useState } from 'react';
import Category from './FileCategory';
import { UploadedFileTabProps, UploadedFileList } from './interfaces';

const UploadedFileTab = ({ type, icon }: UploadedFileTabProps) => {
  let sentQuery;

  switch (type) {
    case 'Myfile':
      sentQuery = 'Myfile';
      break;
    case 'meeting':
      sentQuery = 'meeting';
      break;
    case 'report':
      sentQuery = 'report';
      break;
    default:
      break;
  }

  return (
    <Category
    // fileList={fileList}
    >
      {icon}
    </Category>
  );
};

export default UploadedFileTab;
