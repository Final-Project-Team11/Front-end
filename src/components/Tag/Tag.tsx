import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import Tags from './Tags/Tags';
import { useMentionedSchedules } from '../../api/hooks/Tag/useGetTag';
import { TagElement } from './interfaces';
import { TagBlockCssProps } from './interfaces';
import Board from '../Board/Board';
import CalendarIcon from '../../assets/Icons/CalendarIcon';
import { COLOR } from '../../styles/colors';

const Tag = ({ types }: TagBlockCssProps) => {
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

  // data 존재 시
  const tags = data ? data.pages.flatMap(page => page.mention) : [];

  // props로 줄 icon
  const icon = <CalendarIcon usage="title" />;

  return (
    <Board icon={icon} title="tag" types={types}>
      <UI.StInsideBlock ref={targetDiv}>
        {tags.map((tag: TagElement) => {
          return <Tags key={tag.mentionId} tag={tag} types={types} />;
        })}
      </UI.StInsideBlock>
    </Board>
  );
};

export default Tag;
