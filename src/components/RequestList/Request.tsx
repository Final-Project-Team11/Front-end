import React, { useEffect, useRef } from 'react';
import { useGetRequest } from '../../api/hooks/Request/useGetRequest';
import Board from '../Board/Board';
import RequestedOne from './RequestedOne/RequestedOne';
import { RequestTabType } from './interfaces';
import BusinessIcon from '../../assets/Icons/BusinessIcon';
import { COLOR } from '../../styles/colors';

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
  const icon = <BusinessIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;

  if (isLoading) {
    return (
      <Board icon={icon} title="RequestedList" targetDiv={targetDiv}>
        ...loading
      </Board>
    );
  }

  const requests = data
    ? data.pages.reduce<RequestTabType[]>(
        (acc, page) => (page.schedule ? [...acc, ...page.schedule] : acc),
        []
      )
    : [];

  return (
    <Board icon={icon} title="출장 관련" targetDiv={targetDiv}>
      {requests.map(request => {
        return <RequestedOne key={request.Id} request={request} />;
      })}
    </Board>
  );
};

export default Request;
