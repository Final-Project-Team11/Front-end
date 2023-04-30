import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';

export const useGetCardInfo = () => {
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_CARD_INFO],
    queryFn: async () => {
      const response = await apis.get('/usersInfo');
      return response.data.user;
    },
  });

  return {
    userInfo: data,
    infoIsLoading: isLoading,
  };
};
