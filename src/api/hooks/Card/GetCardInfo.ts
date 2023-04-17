import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import instnace from '../../../axios/api';

export const GetCardInfo = () => {
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_CARD_INFO],
    queryFn: async () => {
      const response = await instnace.get('/usersInfo');
      return response.data.user;
    },
  });

  return {
    userInfo: data,
    infoIsLoading: isLoading,
  };
};
