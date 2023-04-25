import React from 'react';
import * as UI from './style';
import { DetailProps } from '../interfaces';

const RequestDetail = ({ data, isLoading }: DetailProps) => {
  if (isLoading || !data) {
    return <div>Loading....</div>;
  }

  return (
    <UI.Modal>
      <UI.Header>
        <UI.HeaderIcon />
        <UI.TitleSpan>
          {data.start === data.end ? data.start : `${data.start} ~ ${data.end}`}
        </UI.TitleSpan>
        <UI.TitleSpan>{data.userName}</UI.TitleSpan>
        <UI.TitleSpan>{data.title}</UI.TitleSpan>
      </UI.Header>
      <UI.Devider />
      <UI.ContentArea>
        <UI.ContentSpan>{data.body}</UI.ContentSpan>
      </UI.ContentArea>
      <UI.Footer>
        <UI.FooterHalf>
          {data.Files.map((file, idx) => {
            if (file.fileName && file.fileLocation) {
              return (
                <React.Fragment key={idx}>
                  <UI.FooterSpanBlock>{file.fileName}</UI.FooterSpanBlock>
                  <a href={file.fileLocation}>{file.fileName}</a>
                </React.Fragment>
              );
            }
            return null;
          })}
        </UI.FooterHalf>
        <UI.Devider />
        <UI.FooterHalf>
          {data.attendees.map((tag, idx) => {
            return <UI.FooterSpanBlock key={idx}>@ {tag}</UI.FooterSpanBlock>;
          })}
        </UI.FooterHalf>
      </UI.Footer>
    </UI.Modal>
  );
};

export default RequestDetail;
