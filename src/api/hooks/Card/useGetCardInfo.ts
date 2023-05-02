import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';
import { CardInfo } from '../../../components/Card/interfaces';

export const useGetCardInfo = () => {
  const { data, isLoading } = useQuery<CardInfo>({
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
