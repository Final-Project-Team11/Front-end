import React from 'react';
import * as UI from './style';
import { BsCheckCircleFill, BsCircle, BsXCircleFill } from 'react-icons/bs';
import { Props } from './interfaces';

const RequestedOne = ({ request }: Props) => {
  // 요청 상태 표시 원 icon
  let statusCircle;
  switch (request.status) {
    case 'submit': {
      statusCircle = <BsCircle />;
      break;
    }
    case 'accept': {
      statusCircle = <BsCheckCircleFill />;
      break;
    }
    case 'deny': {
      statusCircle = <BsXCircleFill />;
      break;
    }
    default:
      break;
  }

  return (
    <UI.StRequestedListBlock key={request.eventId} types={request.status}>
      <UI.StLeftBlock>
        <UI.StNameDateBlock>
          <UI.StNameDateDiv>
            <UI.StNameSpan>😵‍💫 | {request.userName}</UI.StNameSpan>
            <UI.StDateSpan className="date">{request.enrollDay}</UI.StDateSpan>
          </UI.StNameDateDiv>
        </UI.StNameDateBlock>
        <UI.StContentSpan>
          📎 |{' '}
          {request.status === 'submit' ? (
            request.title
          ) : (
            <UI.StRejectedSpan>{request.title}</UI.StRejectedSpan>
          )}
        </UI.StContentSpan>
      </UI.StLeftBlock>
      <UI.StCircleBlock types={request.status}>{statusCircle}</UI.StCircleBlock>
    </UI.StRequestedListBlock>
  );
};

export default RequestedOne;
