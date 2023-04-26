import React, { useEffect, useRef } from 'react';
import MyRequestList from './MyRequestList';
import { useGetMyRequest } from '../../api/hooks/MyRequest/useGetMyRequest';
import Board from '../Board/Board';
import BusinessIcon from '../../assets/Icons/BusinessIcon';
import { COLOR } from '../../styles/colors';

const MyRequest = () => {
  // 무한스크롤 코드
  const { data, fetchNextPage, hasNextPage } = useGetMyRequest();

  // div 의 스크롤을 감지하기 위해 추가한 useRef
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 스크롤 이벤트 - 무한스크롤 기본 코드
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

  // data 존재 시
  const files = data ? data.pages.flatMap(page => page.schedule) : [];

  // props로 내려줄 icon
  const icon = <BusinessIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;

  return (
    <Board icon={icon} title="내가 올린 결재" targetDiv={targetDiv}>
      {files.map(file => {
        return <MyRequestList key={file.Id} file={file} />;
      })}
    </Board>
  );
};

export default MyRequest;
