import React from 'react';
import * as UI from './style';
import { DetailProps } from './interfaces';

const RequestDetail = ({ data, isLoading, type }: DetailProps) => {
  if (isLoading || !data) {
    return <div>Loading....</div>;
  }

  console.log(data.meetingfile);

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

  console.log(files);

  return (
    <UI.Modal>
      <UI.Header>
        <UI.HeaderIcon />
        <UI.TitleSpan>{files.enrollDay}</UI.TitleSpan>
        <UI.TitleSpan>{files.userName}</UI.TitleSpan>
        <UI.TitleSpan>{files.title}</UI.TitleSpan>
      </UI.Header>
      <UI.Devider />
      <UI.ContentArea>
        <UI.ContentSpan>{files.content}</UI.ContentSpan>
      </UI.ContentArea>
      <UI.Footer>
        <UI.FooterHalf>
          <UI.FooterSpanBlock>파일</UI.FooterSpanBlock>
        </UI.FooterHalf>
        <UI.Devider />
        <UI.FooterHalf>
          {files.ref?.map(tag => {
            return <UI.FooterSpanBlock>@ {tag}</UI.FooterSpanBlock>;
          })}
        </UI.FooterHalf>
      </UI.Footer>
    </UI.Modal>
  );
};

export default RequestDetail;
