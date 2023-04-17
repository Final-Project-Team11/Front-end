import { useInfiniteQuery } from '@tanstack/react-query';
import instnace from '../../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { AxiosError } from 'axios';

interface Vacation {
  eventId: number;
  userName: string;
  typeDetail: string;
  startDay: string;
  endDay: string;
  status: 'submit' | 'accept' | 'deny';
}

interface PageData {
  vacation: Vacation[];
  pageNum: number;
}

export const useGetVacation = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    PageData,
    AxiosError,
    PageData
  >({
    queryKey: [keys.GET_VACATION_LIST], // 쿼리 키
    queryFn: async ({ pageParam = 1 }) => {
      const response = await instnace.get(`/vacation?size=10&page=${pageParam}`);
      return { ...response.data, pageNum: pageParam };
    }, // API 호출 함수
    getNextPageParam: lastPage => {
      // 다음 페이지를 가져오는 로직입니다. lastPage에서 pageNum을 추출하여 1 증가시킵니다.
      const nextPageNum = lastPage.pageNum + 1;

      // 만약 lastPage의 데이터가 비어 있다면, 'undefined'를 반환하여 다음 페이지를 요청하지 않도록 합니다.
      return lastPage.vacation && lastPage.vacation.length > 0 ? nextPageNum : undefined;
    },
  });

  return { data, fetchNextPage, hasNextPage };
};
