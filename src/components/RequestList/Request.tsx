import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import { useGetRequest } from '../../api/hooks/Request.tsx/useGetRequest';

import Board from '../Board/Board';
import RequestedOne from './RequestedOne/RequestedOne';
import { RequestInfo } from './interfaces';

const Request = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useGetRequest();
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 스크롤이벤트 동작 시 GET 요청
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
  }, [handleScroll, fetchNextPage, hasNextPage]);

  // props 로 내려줄 icon
  const icon = '✈️';

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (!data || !data.pages) {
    console.log('데이터', data);
    console.log('데이터.페이지', data?.pages);
    return <div>데이터 없음</div>;
  }

  const requests = data
    ? data.pages.reduce<RequestInfo[]>(
        (acc, page) => (page.schedule ? [...acc, ...page.schedule] : acc),
        []
      )
    : [];

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
