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
  const [hover, setHover] = useState(false);

  // status 타입에 따라 바뀌는 변수 requestStatus
  let requestStatus: React.ReactNode;
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

      {hover ? (
        <StDecideBlock onMouseLeave={() => setHover(false)}>
          <StDecAcceptBlock>V</StDecAcceptBlock>
          <StDecDenyBlock>X</StDecDenyBlock>
        </StDecideBlock>
      ) : (
        requestStatus
      )}
    </StVacateBlock>
  );
};

export default Vacation;
