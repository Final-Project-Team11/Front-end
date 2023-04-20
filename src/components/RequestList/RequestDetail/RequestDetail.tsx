import React from 'react';
import * as UI from './style';
import { DetailProps } from './interfaces';

const RequestDetail = ({ data, isLoading }: DetailProps) => {
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <UI.Modal>
      <UI.Header>
        <UI.HeaderIcon />
        <UI.TitleSpan>
          {data.startDay === data.endDay
            ? data.startDay
            : `${data.startDay} ~ ${data.endDay}`}
        </UI.TitleSpan>
        <UI.TitleSpan>{data.userName}</UI.TitleSpan>
        <UI.TitleSpan>{data.title}</UI.TitleSpan>
      </UI.Header>
      <UI.Devider />
      <UI.ContentArea>
        <UI.ContentSpan>{data.content}</UI.ContentSpan>
      </UI.ContentArea>
      <UI.Footer>
        <UI.FooterHalf>
          <UI.FooterSpanBlock>파일</UI.FooterSpanBlock>
        </UI.FooterHalf>
        <UI.Devider />
        <UI.FooterHalf>
          {data.ref.map(tag => {
            return <UI.FooterSpanBlock>@ {tag}</UI.FooterSpanBlock>;
          })}
        </UI.FooterHalf>
      </UI.Footer>
    </UI.Modal>
  );
};

export default RequestDetail;
