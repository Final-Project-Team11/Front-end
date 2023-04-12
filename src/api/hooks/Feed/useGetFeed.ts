import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
  todoId: number;
  todo: string;
  isDone: boolean;
}

interface Feed {
  feed: {
    categoryId: number;
    categoryName: string;
    todos: Todo[];
  }[];
  feedIsLoading: boolean;
}

export const useGetFeed = (): Feed => {
  const { data, isLoading } = useQuery({
    queryKey: ['GET_POSTS'], //posts get요청 key
    queryFn: async () => {
      const data = await axios.get('http://localhost:3001/feed');
      return data.data;
    },
  });

  return {
    feed: data,
    feedIsLoading: isLoading,
  };
};

// type 적용 아직안됨
