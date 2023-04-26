import { useInfiniteQuery } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { AxiosError } from 'axios';
import { RequestTabType } from '../../../components/RequestList/interfaces';

type PageData = {
  pageNum: number;
} & (
  | {
      schedule: RequestTabType[];
    }
  | {
      other: RequestTabType[];
    }
);
type Payload = 'schedule' | 'other';

export const useGetRequest = (type: Payload) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery<
    PageData,
    AxiosError,
    PageData
  >({
    queryKey: [keys.GET_REQUEST_LIST, type], // 쿼리 키
    queryFn: async ({ pageParam = 1 }) => {
      const response = await apis.get(`/${type}?size=5&page=${pageParam}`);
      console.log('@@@@@@@@', response.data);
      return { ...response.data, pageNum: pageParam };
    }, // API 호출 함수
    getNextPageParam: lastPage => {
      // 다음 페이지를 가져오는 로직입니다. lastPage에서 pageNum을 추출하여 1 증가시킵니다.
      const nextPageNum = lastPage.pageNum + 1;

      // 만약 lastPage의 데이터가 비어 있다면, 'undefined'를 반환하여 다음 페이지를 요청하지 않도록 합니다.
      if ('schedule' in lastPage && lastPage.schedule.length > 0) {
        return nextPageNum;
      } else if ('other' in lastPage && lastPage.other.length > 0) {
        return nextPageNum;
      } else {
        return undefined;
      }
    },
  });

  return { data, fetchNextPage, hasNextPage, isLoading };
};
