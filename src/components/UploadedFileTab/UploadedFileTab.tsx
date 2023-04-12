import React, { useEffect, useState } from 'react';
import Category from './FileCategory';
import { UploadedFileTabProps, UploadedFileList } from './interfaces';

const UploadedFileTab = ({ type, icon }: UploadedFileTabProps) => {
  //////////////////////////////////////////////////////
  // const [queryNum, setQueryNum] = useState<number>(0);
  // const [fileList, setFileList] = useState<never[] | UploadedFileList[]>([]);

  // const onScroll = () => {
  //   if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight) {
  //     setQueryNum(pre => pre + 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, [queryNum]);

  // useEffect(() => {
  //   if (boardData) {
  //     setPostData((prevPostData: never[] | ImageType[]): never[] | ImageType[] => [
  //       ...prevPostData,
  //       ...boardData,
  //     ]);
  //   }
  // }, [boardData]);
  /////////////////////////////////////////////////////////////

  let sentQuery;

  switch (type) {
    case 'Myfile':
      sentQuery = 'Myfile';
      console.log(sentQuery);
      break;
    case 'meeting':
      sentQuery = 'meeting';
      console.log(sentQuery);
      break;
    case 'report':
      sentQuery = 'report';
      console.log(sentQuery);
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
