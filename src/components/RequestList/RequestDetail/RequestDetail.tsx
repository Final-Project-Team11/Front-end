import React from 'react';
import * as UI from './style';
import { DecideParams, DetailProps } from './interfaces';
import { useDecideRequest } from '../../../api/hooks/Request/useDecideRequest';
import Swal from 'sweetalert2';
import { COLOR } from '../../../styles/colors';

const RequestDetail = ({ data, isLoading, closeModal }: DetailProps) => {
  if (isLoading) {
    return <div>Loading....</div>;
  }

  // 수락 거절 버튼 핸들러
  const { decideRequest } = useDecideRequest();
  const acceptBtnClickHandler = (params: DecideParams) => {
    // decideRequest(params);

    let message: string;
    if (params.types === 'accept' ? (message = '수락') : (message = '거절'))
      Swal.fire({
        title: `${message}하시겠습니까?`,
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: COLOR.PAGE_BLUE,
        cancelButtonColor: COLOR.VACATION_RED,
        confirmButtonText: message,
        customClass: {
          popup: 'swal-custom-z-index',
        },
        // 직접 style 속성 추가
        didOpen: () => {
          const popup = document.querySelector('.swal-custom-z-index');
          if (popup) {
            // 타입을 강제로 HTMLElement로 캐스팅
            (popup as HTMLElement).style.zIndex = '2500'; // 기존 모달의 z-index보다 높은 값을 설정하세요
          }
        },
      }).then(result => {
        if (result.isConfirmed) {
          decideRequest(params);
          Swal.fire(`${message}되었습니다.`, 'success');
        }
      });
  };

  const acceptParam = {
    eventId: data.eventId,
    types: 'accept',
  };
  const declineParam = {
    eventId: data.eventId,
    types: 'deny',
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
          onClick={() => acceptBtnClickHandler(acceptParam)}
        >
          수락
        </UI.DecideButton>
        <UI.DecideButton
          types="decline"
          onClick={() => acceptBtnClickHandler(declineParam)}
        >
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
