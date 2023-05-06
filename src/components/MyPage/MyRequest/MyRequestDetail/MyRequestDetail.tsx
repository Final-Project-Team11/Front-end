import { DetailProps } from '../interfaces';
// 스타일, 인터페이스
import * as UI from './style';
// 서버 요청
import {
  Payload,
  useGetRequestDetail,
} from '../../../../api/hooks/Request/useGetRequestDetail';
// 컴포넌트
import Loading from '../../../Loading/Loading';

const MyRequestDetail = ({ closeModal, eventId }: DetailProps) => {
  // 데이터 요청, 요청용 payload
  const detailPayload: Payload = {
    type: 'schedule',
    id: eventId,
  };
  const { data, isLoading } = useGetRequestDetail(detailPayload);

  // 로딩
  if (isLoading || !data) {
    return (
      <UI.Modal>
        <UI.LoadingBlock>
          <Loading />
        </UI.LoadingBlock>
      </UI.Modal>
    );
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
