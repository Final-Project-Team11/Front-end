import React, { useState, useEffect, useRef } from 'react';
import * as UI from './style';
import Tags from './Tags/Tags';
import { useMentionedSchedules } from '../../api/hooks/Tag/useGetTag';
import { TagElement } from './Tags/interfaces';

const Tag = () => {
  // 무한스크롤 코드
  const { data, fetchNextPage, hasNextPage } = useMentionedSchedules();

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

  if (data) {
    console.log(data.pages);
  }

  // data 존재 시
  const tags = data ? data.pages.flatMap(page => page.mention) : [];
  console.log(tags);

  return (
    <UI.StTagBlock>
      📌
      <UI.StDeviderBlock />
      <UI.StFeedBlock ref={targetDiv}>
        {tags.map((tag: TagElement) => {
          return <Tags key={tag.eventId} tag={tag} />;
        })}
      </UI.StFeedBlock>
    </UI.StTagBlock>
  );
};

export default Tag;
