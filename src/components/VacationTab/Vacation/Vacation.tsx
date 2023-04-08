import React, { useState } from 'react';
import {
  StSubmitBlock,
  StSpanBlock,
  StVacateBlock,
  StVacateSpan,
  StAcceptBlock,
  StDenyBlock,
  StDecideBlock,
  StDecAcceptBlock,
  StDecDenyBlock,
} from './style';
import { VacateProps } from './interfaces';

const Vacation = ({
  eventId,
  userName,
  title,
  file,
  startDay,
  endDay,
  status,
  children,
}: VacateProps) => {
  // 선택창 등장, 퇴장을 위한 state
  const [hover, setHover] = useState(false);

  // status 타입에 따라 바뀌는 변수 requestStatus
  let requestStatus: React.ReactNode;

  // 요소에 마우스 진입 시 hover state 변경되며 선택창 등장
  switch (status) {
    case 'accept':
      requestStatus = (
        <StAcceptBlock onMouseEnter={() => setHover(true)}>V</StAcceptBlock>
      );
      break;
    case 'deny':
      requestStatus = <StDenyBlock onMouseEnter={() => setHover(true)}>X</StDenyBlock>;
      break;
    default:
      requestStatus = <StSubmitBlock onMouseEnter={() => setHover(true)} />;
      break;
  }

  return (
    <StVacateBlock>
      <StSpanBlock>
        <StVacateSpan>{`${title} | ${userName}`}</StVacateSpan>
        <StVacateSpan>{`기간 | ${startDay} ~ ${endDay}`}</StVacateSpan>
      </StSpanBlock>

      {/* hover 가 true 면 선택창, false 면 requestStatus 그대로 */}
      {hover ? (
        <StDecideBlock onMouseLeave={() => setHover(false)}>
          <StDecAcceptBlock className="decision">V</StDecAcceptBlock>
          <StDecDenyBlock className="decision">X</StDecDenyBlock>
        </StDecideBlock>
      ) : (
        requestStatus
      )}
    </StVacateBlock>
  );
};

export default Vacation;
