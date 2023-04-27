import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';
import { CardInfoType } from '../../../components/Card/interfaces';

export const useGetCardDetail = () => {
  const { data, refetch, isLoading } = useQuery<CardInfoType>({
    queryKey: [keys.GET_CARD_DETAIL],
    queryFn: async () => {
      const response = await apis.get(`/usersInfo/profile`);
      console.log(response);
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
