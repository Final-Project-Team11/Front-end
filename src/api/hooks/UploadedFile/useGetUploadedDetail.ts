import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';
import { DetailType } from '../../../components/MyPage/UploadedFileTab/interfaces';

interface Payload {
  eventId: number;
  types: 'myfiles' | 'meetingfiles' | 'reportfiles';
}

export const useGetUploadedDetail = ({ eventId, types }: Payload) => {
  const { data, isLoading } = useQuery<DetailType>({
    queryKey: [keys.GET_UPLOADED_DETAIL, eventId, types],
    queryFn: async () => {
      const response = await apis.get(`/${types}/${eventId}`);
      return response.data;
    },
  });

  return {
    data,
    isLoading,
  };
};
