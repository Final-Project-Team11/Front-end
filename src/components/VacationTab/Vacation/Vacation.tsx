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
  switch (status) {
    case 'accept':
      requestStatus = (
        <UI.StAcceptBlock onMouseEnter={() => setHover(true)} status={true}>
          <BsCheckCircle />
        </UI.StAcceptBlock>
      );
      break;
    case 'deny':
      requestStatus = (
        <UI.StAcceptBlock onMouseEnter={() => setHover(true)} status={false}>
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

  const payload = {
    status: 'accept' | 'deny';
    eventId: number;
  }

  const { mutate } = usePutDecision(payload);

  console.log(hover);

  return (
    <UI.StVacateBlock onMouseLeave={() => setHover(false)}>
      <UI.StSpanBlock>
        <UI.StVacateSpan>{`${type} | ${userName}`}</UI.StVacateSpan>
        <UI.StVacateSpan>{`기간 | ${startDay} ~ ${endDay}`}</UI.StVacateSpan>
      </UI.StSpanBlock>

      {/* hover 가 true 면 선택창, false 면 requestStatus 그대로 */}
      {hover ? (
        <UI.StDecideBlock onMouseLeave={() => setHover(false)}>
          <UI.StDecAcceptBlock className="decision" status={true}>
            <BsCheck />
          </UI.StDecAcceptBlock>
          <UI.StDecAcceptBlock className="decision" status={false}>
            <BsX />
          </UI.StDecAcceptBlock>
        </UI.StDecideBlock>
      ) : (
        requestStatus
      )}
    </UI.StVacateBlock>
  );
};

export default Vacation;
