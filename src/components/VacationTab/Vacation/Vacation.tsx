import React, { useState } from 'react';
import {
  StSubmitBlock,
  StSpanBlock,
  StVacateBlock,
  StVacateSpan,
  StAcceptBlock,
  StDecideBlock,
  StDecAcceptBlock,
  StDecDenyBlock,
} from './style';
import { VacateProps } from './interfaces';
import { BsCheckCircle, BsXCircle, BsCircle, BsCheck, BsX } from 'react-icons/bs';

const Vacation = ({ type, userName, startDay, endDay, status }: VacateProps) => {
  // 선택창 등장, 퇴장을 위한 state
  const [hover, setHover] = useState(false);

  // status 타입에 따라 바뀌는 변수 requestStatus
  let requestStatus: React.ReactNode;

  // 요소에 마우스 진입 시 hover state 변경되며 선택창 등장
  switch (status) {
    case 'accept':
      requestStatus = (
        // BsCheckCircleFill
        // BsCheckCircle
        <StAcceptBlock onMouseEnter={() => setHover(true)} status={true}>
          <BsCheckCircle />
        </StAcceptBlock>
      );
      break;
    case 'deny':
      // BsXCircleFill
      // BsXCircle
      requestStatus = (
        <StAcceptBlock onMouseEnter={() => setHover(true)} status={false}>
          <BsXCircle />
        </StAcceptBlock>
      );
      break;
    default:
      requestStatus = (
        <StSubmitBlock onMouseEnter={() => setHover(true)}>
          <BsCircle />
        </StSubmitBlock>
      );
      break;
  }

  return (
    <StVacateBlock>
      <StSpanBlock>
        <StVacateSpan>{`${type} | ${userName}`}</StVacateSpan>
        <StVacateSpan>{`기간 | ${startDay} ~ ${endDay}`}</StVacateSpan>
      </StSpanBlock>

      {/* hover 가 true 면 선택창, false 면 requestStatus 그대로 */}
      {hover ? (
        <StDecideBlock onMouseLeave={() => setHover(false)}>
          <StDecAcceptBlock className="decision" status={true}>
            <BsCheck />
          </StDecAcceptBlock>
          <StDecAcceptBlock className="decision" status={false}>
            <BsX />
          </StDecAcceptBlock>
        </StDecideBlock>
      ) : (
        requestStatus
      )}
    </StVacateBlock>
  );
};

export default Vacation;
