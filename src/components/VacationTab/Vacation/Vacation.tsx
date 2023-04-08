import React from 'react';
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
  // status 타입에 따라 바뀌는 변수 requestStatus
  let requestStatus: React.ReactNode;
  switch (status) {
    case 'accept':
      requestStatus = <StAcceptBlock>V</StAcceptBlock>;
      break;
    case 'deny':
      requestStatus = <StDenyBlock>X</StDenyBlock>;
      break;
    default:
      requestStatus = <StSubmitBlock />;
      break;
  }

  return (
    <StVacateBlock>
      <StSpanBlock>
        <StVacateSpan>{`${title} | ${userName}`}</StVacateSpan>
        <StVacateSpan>{`기간 | ${startDay} ~ ${endDay}`}</StVacateSpan>
      </StSpanBlock>
      {/* {requestStatus} */}
      <StDecideBlock>
        <StDecAcceptBlock>V</StDecAcceptBlock>
        <StDecDenyBlock>X</StDecDenyBlock>
      </StDecideBlock>
    </StVacateBlock>
  );
};

export default Vacation;
