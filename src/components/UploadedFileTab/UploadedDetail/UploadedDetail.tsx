import * as UI from './style';
import { DetailProps } from '../interfaces';
import { useGetUploadedDetail } from '../../../api/hooks/UploadedFile/useGetUploadedDetail';

const UploadedDetail = ({ eventId, types, closeModal }: DetailProps) => {
  const payload = {
    eventId,
    types,
  };

  const { data, isLoading } = useGetUploadedDetail(payload);
  if (isLoading || !data) {
    return <div>Loading....</div>;
  }

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
