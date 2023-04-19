import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';

interface Payload {
  id: number;
  types: 'myfiles' | 'meetingfiles' | 'reportfiles';
}

export const useGetUploadedDetail = ({ id, types }: Payload) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: [keys.GET_UPLOADED_DETAIL, id],
    queryFn: async () => {
      const response = await apis.get(`/${types}/${id}`);
      return response.data;
    },
    // enabled: false,
  });

  return {
    data,
    refetch,
    isLoading,
  };
};
