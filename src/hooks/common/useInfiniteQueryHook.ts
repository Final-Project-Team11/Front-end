import { RefObject, useEffect } from 'react';

interface HookType {
  targetDiv: RefObject<HTMLDivElement>;
  fetchNextPage: () => Promise<any>;
  hasNextPage: boolean;
}

export const useInfiniteQueryHook = ({
  targetDiv,
  fetchNextPage,
  hasNextPage,
}: HookType) => {
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
  }, [targetDiv, handleScroll]);

  return [];
};
