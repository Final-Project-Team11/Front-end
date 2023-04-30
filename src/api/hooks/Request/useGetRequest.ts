import { useInfiniteQuery } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { AxiosError } from 'axios';
import { RequestTabType } from '../../../components/RequestList/interfaces';

// PageData 타입은 schedule, other 둘 중 하나와 pageNum을 갖는다
export type PageData = {
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
    queryKey: [keys.GET_REQUEST_LIST, type],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await apis.get(`/${type}?size=5&page=${pageParam}`);
      return { ...response.data, pageNum: pageParam };
    },
    getNextPageParam: lastPage => {
      // 다음 페이지를 가져오는 로직. lastPage에서 pageNum을 추출하여 1 증가시킨다.
      const nextPageNum = lastPage.pageNum + 1;

      // 만약 lastPage의 데이터가 비어 있다면, 'undefined'를 반환하여 다음 페이지를 요청하지 않도록.
      if ('schedule' in lastPage && lastPage.schedule.length > 0) {
        return nextPageNum;
      } else if ('other' in lastPage && lastPage.other.length > 0) {
        return nextPageNum;
      } else {
        return undefined;
      }
    },
  });

  // hasNextPage: hasNextPage || false 이 부분은 useInfiniteQuery의 리턴값인 hasNextPage의 타입인 boolean | undefined 를 boolean 형식으로 바꿔준다.
  return { data, fetchNextPage, hasNextPage: hasNextPage || false, isLoading };
};
