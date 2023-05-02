import { useQuery } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { Category } from '../../../components/Feed/interfaces';

export const useGetFeed = () => {
  const { data, isLoading } = useQuery<Category[]>({
    queryKey: [keys.GET_POSTS], //posts get요청 key
    queryFn: async () => {
      const { data } = await apis.get('/feed');
      return data.feed;
    },
  });

  return {
    feed: data,
    feedIsLoading: isLoading,
  };
};

// type 적용 아직안됨
