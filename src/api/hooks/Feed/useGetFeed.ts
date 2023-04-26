import { useQuery } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { Todo } from '../../../components/Feed/interfaces';

interface Feed {
  feed: {
    categoryId: number;
    categoryName: string;
    todos: Todo[] | [];
  }[];
  feedIsLoading: boolean;
}

export const useGetFeed = (): Feed => {
  const { data, isLoading } = useQuery({
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
