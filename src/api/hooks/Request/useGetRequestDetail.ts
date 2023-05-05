import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';
import { RequestInfo } from '../../../components/RequestList/interfaces';

interface Payload {
  type: 'schedule' | 'other';
  id: number;
}

export const useGetRequestDetail = (payload: Payload) => {
  const { data, isLoading } = useQuery<RequestInfo>({
    queryKey: [keys.GET_REQUEST_DETAIL, payload.id],
    queryFn: async () => {
      const response = await apis.get(`/${payload.type}/${payload.id}`);
      return response.data;
    },
  });

  return {
    data,
    isLoading,
  };
};
