import { useInfiniteQuery } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { AxiosError } from 'axios';

interface Mention {
  enrollDay: string;
  eventId: number;
  eventType: string;
  file: string;
  isChecked: 0 | 1;
  mentionId: number;
  title: string;
  userName: string;
}

interface PageData {
  mention: Mention[];
  pageNum: number;
}

export const useMentionedSchedules = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    PageData,
    AxiosError,
    PageData
  >({
    queryKey: [keys.GET_TAG], // 쿼리 키
    queryFn: async ({ pageParam = 1 }) => {
      const response = await apis.get(
        `/mentionedSchedule?pageSize=25&pageNum=${pageParam}`
      );
      return { ...response.data, pageNum: pageParam };
    }, // API 호출 함수
    getNextPageParam: lastPage => {
      // 다음 페이지를 가져오는 로직입니다. lastPage에서 pageNum을 추출하여 1 증가시킵니다.
      const nextPageNum = lastPage.pageNum + 1;

      // 만약 lastPage의 데이터가 비어 있다면, 'undefined'를 반환하여 다음 페이지를 요청하지 않도록 합니다.
      return lastPage.mention && lastPage.mention.length > 0 ? nextPageNum : undefined;
    },
  });

  return { data, fetchNextPage, hasNextPage };
};
