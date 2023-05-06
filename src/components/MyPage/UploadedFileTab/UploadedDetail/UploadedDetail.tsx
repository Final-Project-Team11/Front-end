// 스타일, 인터페이스
import * as UI from './style';
import { DetailProps } from '../interfaces';
// 서버 요청
import { useGetUploadedDetail } from '../../../../api/hooks/UploadedFile/useGetUploadedDetail';
// 컴포넌트
import Loading from '../../../Loading/Loading';

const UploadedDetail = ({ eventId, types, closeModal }: DetailProps) => {
  // 데이터 요청, 요청용 payload
  const payload = {
    eventId,
    types,
  };
  const { data, isLoading } = useGetUploadedDetail(payload);

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

  // 타입따라 파일 세팅
  let files;
  switch (types) {
    case 'meetingfiles': {
      files = data.meetingfile;
      break;
    }
    case 'myfiles': {
      files = data.detail;
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
          {files.files.map((file, idx) => {
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
          {files.attendees?.map((tag, idx) => {
            return <UI.FooterSpanBlock key={idx}>@ {tag}</UI.FooterSpanBlock>;
          })}
        </UI.FooterHalf>
      </UI.Footer>
    </UI.Modal>
  );
};

export default UploadedDetail;
