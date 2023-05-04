import React, { useState } from 'react';
import * as UI from './style';
import { BsCheckCircle } from '@react-icons/all-files/bs/BsCheckCircle';
import { BsXCircle } from '@react-icons/all-files/bs/BsXCircle';
import { BsCircle } from '@react-icons/all-files/bs/BsCircle';
import { BsCheck } from '@react-icons/all-files/bs/BsCheck';
import { BsX } from '@react-icons/all-files/bs/BsX';

import { usePutDecision } from '../../../api/hooks/Vacation/usePutDecision';
import { VacationList, VacationPayload } from '../interfaces';
import Swal, { SweetAlertIcon } from 'sweetalert2';

const Vacation = ({ vacation }: { vacation: VacationList }) => {
  // 선택창 등장, 퇴장을 위한 state
  const [hover, setHover] = useState(false);

  // status 타입에 따라 바뀌는 변수 requestStatus
  let requestStatus: React.ReactNode;

  // 요소에 마우스 진입 시 hover state 변경되며 선택창 등장
  switch (vacation.status) {
    case 'accept':
      requestStatus = (
        <UI.StAcceptBlock onMouseEnter={() => setHover(true)}>
          <BsCheckCircle />
        </UI.StAcceptBlock>
      );
      break;
    case 'deny':
      requestStatus = (
        <UI.StAcceptBlock onMouseEnter={() => setHover(true)}>
          <BsXCircle />
        </UI.StAcceptBlock>
      );
      break;
    default:
      requestStatus = (
        <UI.StSubmitBlock onMouseEnter={() => setHover(true)}>
          <BsCircle />
        </UI.StSubmitBlock>
      );
      break;
  }

  // 휴가 타입
  let vacationType;
  switch (vacation.typeDetail) {
    case '0': {
      vacationType = '휴가';
      break;
    }
    case '1': {
      vacationType = '반차';
      break;
    }
    case '2': {
      vacationType = '월차';
      break;
    }
    case '3': {
      vacationType = '병가';
      break;
    }
  }

  // PATCH 요청용 payload
  const accept: VacationPayload = {
    status: 'accept',
    Id: vacation.Id,
    userName: vacation.userName,
  };
  const deny: VacationPayload = {
    status: 'deny',
    Id: vacation.Id,
    userName: vacation.userName,
  };

  const { mutate } = usePutDecision();

  const decideButton = (decision: string) => {
    let message: string;
    let icon: SweetAlertIcon;
    let decideOpt: VacationPayload;
    decision === 'accept'
      ? ((message = '수락'), (icon = 'success'), (decideOpt = accept))
      : ((message = '거절'), (icon = 'error'), (decideOpt = deny));

    // alert 창
    Swal.fire({
      title: `${message}하시겠습니까?`,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: 'black',
      cancelButtonColor: 'gray',
      confirmButtonText: message,
      cancelButtonText: '닫기',
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        mutate(decideOpt);
      }
    });
  };

  return (
    <UI.StListBlock onMouseLeave={() => setHover(false)}>
      <UI.StSpanBlock status={vacation.status}>
        <UI.StNormalSpan>{`${vacationType} | ${vacation.userName}`}</UI.StNormalSpan>
        <UI.StNormalSpan>{`기간 | ${vacation.start} ~ ${vacation.end}`}</UI.StNormalSpan>
      </UI.StSpanBlock>

      {/* hover 가 true 면 선택창, false 면 requestStatus 그대로 */}
      {hover ? (
        <UI.StDecideBlock onMouseLeave={() => setHover(false)}>
          <UI.StDecAcceptBlock
            className="decision"
            status={true}
            onClick={() => decideButton('deny')}
          >
            <BsX />
          </UI.StDecAcceptBlock>
          <UI.StDecAcceptBlock
            className="decision"
            status={false}
            onClick={() => decideButton('accept')}
          >
            <BsCheck />
          </UI.StDecAcceptBlock>
        </UI.StDecideBlock>
      ) : (
        requestStatus
      )}
    </UI.StListBlock>
  );
};

export default Vacation;
