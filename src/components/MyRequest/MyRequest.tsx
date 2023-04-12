import React from 'react';
import * as UI from './style';
import { RiFolderUserFill } from 'react-icons/ri';
import MyUploadedFile from './MyUploadedFile/MyUploadedFile';

const MyRequest = () => {
  return (
    <UI.StRequestBlock>
      <RiFolderUserFill />
      <UI.StDeviderBlock />
      <UI.StUploadedFileBlock>
        <MyUploadedFile />
      </UI.StUploadedFileBlock>
    </UI.StRequestBlock>
  );
};

export default MyRequest;
