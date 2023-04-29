import React, { useRef } from 'react';
import Tags from './Tags/Tags';
import { useMentionedSchedules } from '../../api/hooks/Tag/useGetTag';
import { Mention } from './interfaces';
import { TagBlockCssProps } from './interfaces';
import Board from '../Board/Board';
import CalendarIcon from '../../assets/Icons/CalendarIcon';
import { useInfiniteQueryHook } from '../../hooks/common/useInfiniteQueryHook';

const Tag = ({ types }: TagBlockCssProps) => {
  // 무한스크롤 코드
  const { data, fetchNextPage, hasNextPage } = useMentionedSchedules();

  // div 의 스크롤을 감지하기 위해 추가한 useRef
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 무한스크롤 커스텀훅
  useInfiniteQueryHook({ targetDiv, fetchNextPage, hasNextPage });

  // data 존재 시
  const tags = data ? data.pages.flatMap(page => page.mention) : [];

  // props로 줄 icon
  const icon = <CalendarIcon usage="title" />;

  return (
    <Board icon={icon} title="tag" types={types} targetDiv={targetDiv}>
      {tags.map((tag: Mention) => {
        return <Tags key={tag.mentionId} tag={tag} types={types} />;
      })}
    </Board>
  );
};

export default Tag;
