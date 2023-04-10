import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetPosts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['GET_POSTS'], //posts get요청 key
    queryFn: async () => {
      const data = await axios.get('http://localhost:3001/feed');
      // console.log(data.data.categorys[0]);
      return data.data.categorys;
    },
  });

  return {
    feed: data,
    feedIsLoading: isLoading,
  };
};

// type 적용 아직안됨
