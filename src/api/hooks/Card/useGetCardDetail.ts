import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';
import { CardDetailInfo } from '../../../components/Card/interfaces';

export const useGetCardDetail = () => {
  const { data, isLoading } = useQuery<CardDetailInfo>({
    queryKey: [keys.GET_CARD_DETAIL],
    queryFn: async () => {
      const response = await apis.get(`/usersInfo/profile`);
      return response.data;
    },
  });

  return {
    data,
    isLoading,
  };
};
