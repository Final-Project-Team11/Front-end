import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import { RiFolderUserFill } from 'react-icons/ri';
import MyRequestList from './MyRequestList';
import { useGetMyRequest } from '../../api/hooks/MyRequest/useGetMyRequest';

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
  const tags = data ? data.pages.flatMap(page => page.schedule) : [];

  if (data) console.log(tags);

  return (
    <UI.StRequestBlock>
      <RiFolderUserFill />
      <UI.StDeviderBlock />
      <UI.StUploadedFileBlock ref={targetDiv}>
        {tags.map(tag => {
          return <MyRequestList key={tag.eventId} tag={tag} />;
        })}
      </UI.StUploadedFileBlock>
    </UI.StRequestBlock>
  );
};

export default MyRequest;
