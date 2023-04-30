import { useRef } from 'react';
import Tags from './Tags';
import { PageData, useMentionedSchedules } from '../../api/hooks/Tag/useGetTag';
import { Mention } from './interfaces';
import { TagBlockCssProps } from './interfaces';
import Board from '../Board';
import CalendarIcon from '../../assets/Icons/CalendarIcon';
import { useInfiniteQueryHook } from '../../hooks/common/useInfiniteQueryHook';

const Tag = ({ types }: TagBlockCssProps) => {
  // 무한스크롤 코드
  const { data, fetchNextPage, hasNextPage } = useMentionedSchedules();

  // 무한스크롤을 적용할 div를 타겟하기 위해 추가한 useRef
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 무한스크롤 커스텀훅
  useInfiniteQueryHook<PageData>({ targetDiv, fetchNextPage, hasNextPage });

  // data.pages를 풀어서 하나의 배열로 -> useInfiniteQuery 에서 return 하는 data 형식 참고.
  const tags = data ? data.pages.flatMap(page => page.mention) : [];

  // Board title에 들어갈 icon
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
