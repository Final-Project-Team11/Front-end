// 스타일, 인터페이스
import * as UI from './style';
import { DecideParams, DetailProps } from '../interfaces';
// 서버 요청
import { useDecideRequest } from '../../../../api/hooks/Request/useDecideRequest';
import {
  Payload,
  useGetRequestDetail,
} from '../../../../api/hooks/Request/useGetRequestDetail';
// 컴포넌트
import Loading from '../../../Loading/Loading';
// 라이브러리
import Swal, { SweetAlertIcon } from 'sweetalert2';

const RequestDetail = ({ eventId, closeModal, type }: DetailProps) => {
  // 서버 요청, 요청용 payload,
  const detailPayload: Payload = {
    type: type,
    id: eventId,
  };
  const { data, isLoading } = useGetRequestDetail(detailPayload);
  const { decideRequest } = useDecideRequest();

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

  // 수락 거절 버튼 핸들러
  const acceptBtnClickHandler = (params: DecideParams) => {
    let message: string;
    let icon: SweetAlertIcon;
    if (params.types === 'accept') {
      message = '수락';
      icon = 'success';
    } else {
      message = '거절';
      icon = 'error';
    }
    const sweetAlertDiv = document.getElementById('sweetAlertDiv');
    if (!sweetAlertDiv) return;

    // alert 창
    Swal.fire({
      title: `${message}하시겠습니까?`,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: 'black',
      cancelButtonColor: 'gray',
      confirmButtonText: message,
      cancelButtonText: '닫기',
      target: sweetAlertDiv, // 여기에 target 속성을 추가
      reverseButtons: true,
      customClass: {
        popup: 'swal-custom-z-index',
      },
      didOpen: () => {
        const popup = document.querySelector('.swal-custom-z-index');
        if (popup) {
          (popup as HTMLElement).style.zIndex = '2500';
        }
      },
    }).then(result => {
      if (result.isConfirmed) {
        closeModal();
        decideRequest(params);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${message}되었습니다.`,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  // 승인, 거절 클릭 시 요청 보낼 payload
  const acceptParam: DecideParams = {
    eventId: data.Id,
    type: type, // 출장요청, 결재요청 구분
    types: 'accept',
  };
  const declineParam: DecideParams = {
    eventId: data.Id,
    type: type, // 출장요청, 결재요청 구분
    types: 'deny',
  };

  return (
    <>
      <UI.Modal>
        <UI.Header>
          <UI.HeaderIcon />
          <UI.TitleSpan>
            {data.start === data.end ? data.start : `${data.start} ~ ${data.end}`}
          </UI.TitleSpan>
          <UI.TitleSpan>{data.userName}</UI.TitleSpan>
          <UI.TitleSpan>{data.title}</UI.TitleSpan>
          <UI.DecideButton
            types="decline"
            onClick={() => acceptBtnClickHandler(declineParam)}
          >
            거절
          </UI.DecideButton>
          <UI.DecideButton
            types="accept"
            onClick={() => acceptBtnClickHandler(acceptParam)}
          >
            승인
          </UI.DecideButton>
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
      <div id="sweetAlertDiv" />
    </>
  );
};

export default RequestDetail;
