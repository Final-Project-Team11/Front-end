import React from 'react';
import { DetailProps } from '../interfaces';
import {
  Payload,
  useGetRequestDetail,
} from '../../../../api/hooks/Request/useGetRequestDetail';
import * as UI from './style';
import Loading from '../../../Loading/Loading';

const MyRequestDetail = ({ closeModal, eventId }: DetailProps) => {
  const detailPayload: Payload = {
    type: 'schedule',
    id: eventId,
  };
  const { data, isLoading } = useGetRequestDetail(detailPayload);

  if (isLoading || !data) {
    return (
      <UI.Modal>
        <UI.LoadingBlock>
          <Loading />
        </UI.LoadingBlock>
      </UI.Modal>
    );
  }

  console.log(data);

  return (
    <UI.Modal>
      <UI.Header>
        <UI.HeaderIcon />
        <UI.TitleSpan>
          {data.start === data.end ? data.start : `${data.start} ~ ${data.end}`}
        </UI.TitleSpan>
        <UI.TitleSpan>{data.userName}</UI.TitleSpan>
        <UI.TitleSpan>{data.title}</UI.TitleSpan>
        <UI.DecideButton onClick={closeModal}>닫기</UI.DecideButton>
        <UI.Devider positions="Header" />
      </UI.Header>
      <UI.ContentArea>
        <UI.ContentSpan>{data.body}</UI.ContentSpan>
      </UI.ContentArea>
      <UI.Footer>
        <UI.FooterHalf>
          {data.files.map((file, idx) => {
            if (file.fileName && file.fileLocation) {
              return (
                <UI.FooterFileA key={idx} href={file.fileLocation}>
                  {file.fileName}
                </UI.FooterFileA>
              );
            }
            return null;
          })}
        </UI.FooterHalf>
        <UI.Devider positions="Footer" />
        <UI.FooterHalf>
          {data.attendees.map((tag, idx) => {
            return <UI.FooterSpanBlock key={idx}>@ {tag}</UI.FooterSpanBlock>;
          })}
        </UI.FooterHalf>
      </UI.Footer>
    </UI.Modal>
  );
};

export default MyRequestDetail;
