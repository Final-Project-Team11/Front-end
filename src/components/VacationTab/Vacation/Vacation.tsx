import React, { useState } from 'react';
import * as UI from './style';
import { VacateProps } from './interfaces';
import { BsCheckCircle, BsXCircle, BsCircle, BsCheck, BsX } from 'react-icons/bs';
import { usePutDecision } from '../../../api/hooks/Vacation/usePutDecision';

const Vacation = ({ vacation }: VacateProps) => {
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

  // PATCH 요청용 payload
  interface Payload {
    status: 'submit' | 'accept' | 'deny';
    eventId: number;
  }
  const accept: Payload = {
    status: 'accept',
    eventId: vacation.eventId,
  };
  const deny: Payload = {
    status: 'deny',
    eventId: vacation.eventId,
  };

  const { mutate } = usePutDecision();

  return (
    <UI.StListBlock onMouseLeave={() => setHover(false)}>
      <UI.StSpanBlock status={vacation.status}>
        <UI.StNormalSpan>{`${vacation.typeDetail} | ${vacation.userName}`}</UI.StNormalSpan>
        <UI.StNormalSpan>{`기간 | ${vacation.startDay} ~ ${vacation.endDay}`}</UI.StNormalSpan>
      </UI.StSpanBlock>

      {/* hover 가 true 면 선택창, false 면 requestStatus 그대로 */}
      {hover ? (
        <UI.StDecideBlock onMouseLeave={() => setHover(false)}>
          <UI.StDecAcceptBlock
            className="decision"
            status={true}
            onClick={() => mutate(accept)}
          >
            <BsCheck />
          </UI.StDecAcceptBlock>
          <UI.StDecAcceptBlock
            className="decision"
            status={false}
            onClick={() => mutate(deny)}
          >
            <BsX />
          </UI.StDecAcceptBlock>
        </UI.StDecideBlock>
      ) : (
        requestStatus
      )}
    </UI.StListBlock>
  );
};

export default Vacation;
