import { useRef } from 'react';
// 스타일, 인터페이스
import { COLOR } from '../../../styles/colors';
// 서버 요청
import { PageData, useGetMyRequest } from '../../../api/hooks/MyRequest/useGetMyRequest';
import { useInfiniteQueryHook } from '../../../hooks/common/useInfiniteQueryHook';
// 컴포넌트
import MyRequestList from './MyRequestList';
import Board from '../Board';
import { LoadingBlock } from './MyRequestList/style';
import Loading from '../../Loading/Loading';
// SVG파일
import BusinessIcon from '../../../assets/Icons/BusinessIcon';

const MyRequest = () => {
  // 데이터 요청 무한스크롤
  const { data, fetchNextPage, hasNextPage, isLoading } = useGetMyRequest();

  // 무한스크롤을 적용할 div를 타겟하기 위해 추가한 useRef
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 무한스크롤 커스텀훅
  useInfiniteQueryHook<PageData>({ targetDiv, fetchNextPage, hasNextPage });

  // data.pages를 풀어서 하나의 배열로 -> useInfiniteQuery 에서 return 하는 data 형식 참고.
  const files = data ? data.pages.flatMap(page => page.schedule) : [];

  // Board title에 들어갈 icon
  const icon = <BusinessIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;

  // 데이터 없을 시 true 변수
  const NoData = files.length === 0;

  return (
    <Board icon={icon} title="내가 올린 결재" targetDiv={targetDiv}>
      {isLoading ? (
        <LoadingBlock>
          <Loading />
        </LoadingBlock>
      ) : NoData ? (
        <LoadingBlock>요청한 결재가 없습니다.</LoadingBlock>
      ) : (
        files.map(file => {
          return <MyRequestList key={file.Id} file={file} />;
        })
      )}
    </Board>
  );
};

export default MyRequest;
