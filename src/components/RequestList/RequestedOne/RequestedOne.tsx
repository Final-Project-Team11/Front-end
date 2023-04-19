import React from 'react';
import * as UI from './style';
import { Props } from './interfaces';

const RequestedOne = ({ request }: Props) => {
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
          {request.status === 'deny' ? (
            <UI.StRejectedSpan>{request.title}</UI.StRejectedSpan>
          ) : (
            request.title
          )}
        </UI.StContentSpan>
      </UI.StLeftBlock>
    </UI.StRequestedListBlock>
  );
};

export default RequestedOne;
