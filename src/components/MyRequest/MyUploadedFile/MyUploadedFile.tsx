import React from 'react';
import * as UI from './style';
import { BsCheckCircle, BsXCircle, BsCircle } from 'react-icons/bs';

const MyUploadedFile = () => {
  return (
    <UI.StFileBlock>
      <UI.StSpanBlock>
        <UI.StFileSpan>{`🙋🏻‍♂️ | 내이름`}</UI.StFileSpan>
        <UI.StFileSpan>{`💾 | 내가올린파일이름`}</UI.StFileSpan>
      </UI.StSpanBlock>
      <UI.StStatusBlock>
        <BsCheckCircle />
        <BsXCircle />
        <BsCircle />
      </UI.StStatusBlock>
    </UI.StFileBlock>
  );
};

export default MyUploadedFile;
