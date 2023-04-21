import React from 'react';
import * as UI from './style';
import { DetailProps } from './interfaces';

const UploadedDetail = ({ data, isLoading, type, closeModal }: DetailProps) => {
  if (isLoading || !data) {
    return <div>Loading....</div>;
  }

  let files;
  switch (type) {
    case 'meetingfiles': {
      files = data.meetingfile;
      break;
    }
    case 'myfiles': {
      files = data.myfile;
      break;
    }
    case 'reportfiles': {
      files = data.reportfile;
      break;
    }
  }

  return (
    <UI.Modal>
      <UI.Header>
        <UI.HeaderIcon />
        <UI.TitleSpan>{files.enrollDay}</UI.TitleSpan>
        <UI.TitleSpan>{files.userName}</UI.TitleSpan>
        <UI.TitleSpan>{files.title}</UI.TitleSpan>
        <UI.CloseButton onClick={closeModal}>닫기</UI.CloseButton>
        <UI.Devider positions="Header" />
      </UI.Header>
      <UI.ContentArea>
        <UI.ContentSpan>{files.content}</UI.ContentSpan>
      </UI.ContentArea>
      <UI.Footer>
        <UI.FooterHalf>
          <UI.FooterSpanBlock>파일</UI.FooterSpanBlock>
        </UI.FooterHalf>
        <UI.Devider positions="Footer" />
        <UI.FooterHalf>
          {files.ref?.map(tag => {
            return <UI.FooterSpanBlock>@ {tag}</UI.FooterSpanBlock>;
          })}
        </UI.FooterHalf>
      </UI.Footer>
    </UI.Modal>
  );
};

export default UploadedDetail;
