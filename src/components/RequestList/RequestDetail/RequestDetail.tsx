import React from 'react';
import * as UI from './style';
import { DetailProps } from './interfaces';
import { useAcceptRequest } from '../../../api/hooks/Request/useAcceptRequest';

const RequestDetail = ({ data, isLoading, closeModal }: DetailProps) => {
  if (isLoading) {
    return <div>Loading....</div>;
  }

  const { acceptRequest } = useAcceptRequest();

  const acceptBtnClickHandler = (eventId: number) => {
    acceptRequest(eventId);
  };

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
        <UI.DecideButton
          types="accept"
          onClick={() => acceptBtnClickHandler(data.eventId)}
        >
          수락
        </UI.DecideButton>
        <UI.DecideButton types="decline" onClick={closeModal}>
          닫기
        </UI.DecideButton>
        <UI.Devider positions="Header" />
      </UI.Header>
      <UI.ContentArea>
        <UI.ContentSpan>{data.content}</UI.ContentSpan>
      </UI.ContentArea>
      <UI.Footer>
        <UI.FooterHalf>
          <UI.FooterSpanBlock>파일</UI.FooterSpanBlock>
        </UI.FooterHalf>
        <UI.Devider positions="Footer" />
        <UI.FooterHalf>
          {data.ref.map((tag, idx) => {
            return <UI.FooterSpanBlock key={idx}>@ {tag}</UI.FooterSpanBlock>;
          })}
        </UI.FooterHalf>
      </UI.Footer>
    </UI.Modal>
  );
};

export default RequestDetail;
