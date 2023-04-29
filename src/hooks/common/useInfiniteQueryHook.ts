import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { RefObject, useCallback, useEffect } from 'react';
import useThrottleCallback from './useThrottleCallback';

interface HookType<T> {
  targetDiv: RefObject<HTMLDivElement>;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult<T>>;
  hasNextPage: boolean;
}

export const useInfiniteQueryHook = <T>({
  targetDiv,
  fetchNextPage,
  hasNextPage,
}: HookType<T>) => {
  const handleScroll = useCallback(() => {
    const container = targetDiv.current;
    if (container) {
      const scrollHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && hasNextPage) {
        fetchNextPage();
      }
    }
  }, [targetDiv, fetchNextPage, hasNextPage]);

  const throttledHandleScroll = useThrottleCallback(handleScroll, 1500, 'scroll');

  // div에 스크롤 이벤트 추가.
  useEffect(() => {
    const container = targetDiv.current;
    if (container) {
      container.addEventListener('scroll', throttledHandleScroll);
      return () => container.removeEventListener('scroll', throttledHandleScroll);
    }
  }, [targetDiv, handleScroll]);

  return [];
};
