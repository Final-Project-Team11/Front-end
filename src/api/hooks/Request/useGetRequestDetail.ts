import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';
import { RequestInfo } from '../../../components/RequestList/interfaces';

export const useGetRequestDetail = (id: number) => {
  const { data, refetch, isLoading } = useQuery<RequestInfo>({
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
