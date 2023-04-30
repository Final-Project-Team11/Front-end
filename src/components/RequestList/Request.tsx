import React, { useRef } from 'react';
import { PageData, useGetRequest } from '../../api/hooks/Request/useGetRequest';
import Board from '../Board';
import RequestedOne from './RequestedOne';
import { RequestType } from './interfaces';
import BusinessIcon from '../../assets/Icons/BusinessIcon';
import { COLOR } from '../../styles/colors';
import { useInfiniteQueryHook } from '../../hooks/common/useInfiniteQueryHook';

const Request = ({ type }: RequestType) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useGetRequest(type);

  // 무한스크롤을 적용할 div를 타겟하기 위해 추가한 useRef
  const targetDiv = useRef<HTMLDivElement | null>(null);

  //무한스크롤 커스텀훅
  useInfiniteQueryHook<PageData>({ targetDiv, fetchNextPage, hasNextPage });

  // type 따라 Board 상단의 title 변경
  let title: '출장관련' | '결재요청';
  if (type === 'schedule') {
    title = '출장관련';
  } else {
    title = '결재요청';
  }

  // Board title에 들어갈 icon
  const icon = <BusinessIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;

  if (isLoading) {
    return (
      <Board icon={icon} title={title} targetDiv={targetDiv}>
        ...loading
      </Board>
    );
  }

  // data.pages를 풀어서 하나의 배열로 -> useInfiniteQuery 에서 return 하는 data 형식 참고.
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
