import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
  content: string;
}

export const usePostTodo = () => {
  const { mutate } = useMutation({
    mutationFn: async (payload: Todo) => {
      const data = await axios.post('http://localhost:3001/feed', payload);
      return data.data;
    },
    onSuccess: data => {
      console.log(data);
    },
  });

  return {
    postTodo: async (payload: Todo) => {
      await mutate(payload);
    },
  };
};
