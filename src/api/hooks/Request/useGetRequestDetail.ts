import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';

interface RequestInfo {
  eventId: number;
  userName: string;
  startDay: string;
  endDay: string;
  title: string;
  content: string;
  ref: string[]; //참조
  file: string; //(저장 경로)
}

export const useGetRequestDetail = (id: number) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: [keys.GET_REQUEST_DETAIL, id],
    queryFn: async () => {
      const response = await apis.get(`/schedule/${id}`);
      return response.data;
    },
    enabled: false,
  });

  return {
    data,
    refetch,
    isLoading,
  };
};
