import React, { useRef } from 'react';
import { useGetRequest } from '../../api/hooks/Request/useGetRequest';
import Board from '../Board/Board';
import RequestedOne from './RequestedOne/RequestedOne';
import { RequestType } from './interfaces';
import BusinessIcon from '../../assets/Icons/BusinessIcon';
import { COLOR } from '../../styles/colors';
import { useInfiniteQueryHook } from '../../hooks/common/useInfiniteQueryHook';

const Request = ({ type }: RequestType) => {
  let title: '출장관련' | '결재요청';
  if (type === 'schedule') {
    title = '출장관련';
  } else {
    title = '결재요청';
  }

  const { data, fetchNextPage, hasNextPage, isLoading } = useGetRequest(type);
  const targetDiv = useRef<HTMLDivElement | null>(null);

  //무한스크롤 커스텀훅
  useInfiniteQueryHook({ targetDiv, fetchNextPage, hasNextPage });

  // title에 들어갈 icon
  const icon = <BusinessIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;

  if (isLoading) {
    return (
      <Board icon={icon} title={title} targetDiv={targetDiv}>
        ...loading
      </Board>
    );
  }

  const requests = data
    ? data.pages.flatMap(page => ('schedule' in page ? page.schedule : page.other))
    : [];

  return (
    <Board icon={icon} title={title} targetDiv={targetDiv}>
      {requests.map(request => {
        return <RequestedOne key={request.Id} request={request} type={type} />;
      })}
    </Board>
  );
};

export default Request;
