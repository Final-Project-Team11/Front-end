import React from 'react';
import * as UI from './style';
import { DetailProps } from '../interfaces';

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
        <UI.TitleSpan>{files.start}</UI.TitleSpan>
        <UI.TitleSpan>{files.userName}</UI.TitleSpan>
        <UI.TitleSpan>{files.title}</UI.TitleSpan>
        <UI.CloseButton onClick={closeModal}>닫기</UI.CloseButton>
        <UI.Devider positions="Header" />
      </UI.Header>
      <UI.ContentArea>
        <UI.ContentSpan>{files.body}</UI.ContentSpan>
      </UI.ContentArea>
      <UI.Footer>
        <UI.FooterHalf>
          {files.files.map(file => {
            return <UI.FooterSpanBlock>{file.fileName}</UI.FooterSpanBlock>;
          })}
        </UI.FooterHalf>
        <UI.Devider positions="Footer" />
        <UI.FooterHalf>
          {files.attendees?.map((tag, idx) => {
            return <UI.FooterSpanBlock key={idx}>@ {tag}</UI.FooterSpanBlock>;
          })}
        </UI.FooterHalf>
      </UI.Footer>
    </UI.Modal>
  );
};

export default UploadedDetail;
