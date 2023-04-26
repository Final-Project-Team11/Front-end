import { useInfiniteQuery } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { AxiosError } from 'axios';
import { MyListProps } from '../../../components/MyRequest/interfaces';

interface PageData {
  schedule: MyListProps[];
  pageNum: number;
}

export const useGetMyRequest = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    PageData,
    AxiosError,
    PageData
  >({
    queryKey: [keys.GET_MYREQUEST], // 쿼리 키
    queryFn: async ({ pageParam = 1 }) => {
      const response = await apis.get(`/mySchedule?pageSize=10&pageNum=${pageParam}`);
      return { ...response.data, pageNum: pageParam };
    }, // API 호출 함수
    getNextPageParam: lastPage => {
      // 다음 페이지를 가져오는 로직입니다. lastPage에서 pageNum을 추출하여 1 증가시킵니다.
      const nextPageNum = lastPage.pageNum + 1;

      // 만약 lastPage의 데이터가 비어 있다면, 'undefined'를 반환하여 다음 페이지를 요청하지 않도록 합니다.
      return lastPage.schedule && lastPage.schedule.length > 0 ? nextPageNum : undefined;
    },
  });

  return { data, fetchNextPage, hasNextPage };
};
