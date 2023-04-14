import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import instnace from '../../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const fetchMentionedSchedules = async ({ pageParam = 1 }) => {
  const response = await instnace.get(
    `/mentionedSchedule?pageSize=25&pageNum=${pageParam}`
  );
  return response.data;
};

export const useMentionedSchedules = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery(
    [keys.GET_TAG], // 쿼리 키
    fetchMentionedSchedules, // API 호출 함수
    {
      getNextPageParam: (lastPage, pages) => {
        // 다음 페이지를 가져오는 로직입니다. lastPage에서 pageNum을 추출하여 1 증가시킵니다.
        const nextPageNum = lastPage.pageNum + 1;
        return nextPageNum;
      },
    }
  );

  return { data, fetchNextPage, hasNextPage, isLoading, isError };
};
