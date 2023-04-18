import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import { useGetRequest } from '../../api/hooks/Request.tsx/useGetRequest';

import Board from '../Board/Board';
import RequestedOne from './RequestedOne/RequestedOne';

const Request = () => {
  const { data, fetchNextPage, hasNextPage } = useGetRequest();
  const targetDiv = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const container = targetDiv.current;

    if (container) {
      const scrollHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  // div에 스크롤 이벤트 추가.
  useEffect(() => {
    const container = targetDiv.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const requests = data ? data.pages.flatMap(page => page.schedule) : [];

  const icon = '✈️';

  return (
    <Board icon={icon} title="RequestedList">
      <UI.StInsideBlock ref={targetDiv}>
        {requests.map(request => {
          return <RequestedOne key={request.eventId} request={request} />;
        })}
      </UI.StInsideBlock>
    </Board>
  );
};

export default Request;
