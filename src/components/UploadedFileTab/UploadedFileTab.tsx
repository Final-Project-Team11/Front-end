import React, { useEffect, useState } from 'react';
import Category from './FileCategory';
import { UploadedFileTabProps, UploadedFileList } from './interfaces';

const UploadedFileTab = ({ type, icon }: UploadedFileTabProps) => {
  let sentQuery;

  switch (type) {
    case 'Myfile':
      sentQuery = 'Myfile';
      // console.log(sentQuery);
      break;
    case 'meeting':
      sentQuery = 'meeting';
      // console.log(sentQuery);
      break;
    case 'report':
      sentQuery = 'report';
      // console.log(sentQuery);
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
