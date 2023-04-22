import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';

interface Payload {
  eventId: number;
  types: 'myfiles' | 'meetingfiles' | 'reportfiles';
}

export const useGetUploadedDetail = ({ eventId, types }: Payload) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: [keys.GET_UPLOADED_DETAIL, eventId],
    queryFn: async () => {
      const response = await apis.get(`/${types}/${eventId}`);
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
