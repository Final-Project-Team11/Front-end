import { useRef } from 'react';
// 스타일, 인터페이스
import { COLOR } from '../../../styles/colors';
import { LoadingBlock } from './RequestedOne/style';
import { RequestType } from './interfaces';
// 서버 요청
import { PageData, useGetRequest } from '../../../api/hooks/Request/useGetRequest';
import { useInfiniteQueryHook } from '../../../hooks/common/useInfiniteQueryHook';
// 컴포넌트
import Board from '../Board';
import RequestedOne from './RequestedOne';
import Loading from '../../Loading/Loading';
// SVG파일
import BusinessIcon from '../../../assets/Icons/BusinessIcon';

const Request = ({ type }: RequestType) => {
  // 정보 요청
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
  const icon = <BusinessIcon width="21px" height="15px" fill={COLOR.PAGE_LIGHTBLUE} />;

  // data.pages를 풀어서 하나의 배열로 -> useInfiniteQuery 에서 return 하는 data 형식 참고.
  const requests = data
    ? data.pages.flatMap(page => ('schedule' in page ? page.schedule : page.other))
    : [];

  // 데이터 없는 경우 true 변수
  const NoData = requests.length === 0;

  let NoDataMessage;
  type === 'schedule' ? (NoDataMessage = '출장이') : (NoDataMessage = '결재가');

  return (
    <Board icon={icon} title={title} targetDiv={targetDiv}>
      {isLoading ? (
        <LoadingBlock>
          <Loading />
        </LoadingBlock>
      ) : NoData ? (
        <LoadingBlock>{`요청된 ${NoDataMessage} 없습니다.`}</LoadingBlock>
      ) : (
        requests.map(request => {
          return <RequestedOne key={request.Id} request={request} type={type} />;
        })
      )}
    </Board>
  );
};

export default Request;
