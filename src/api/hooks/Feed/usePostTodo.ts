import { useMutation, useQueryClient } from '@tanstack/react-query';
import instnace from '../../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { AxiosError, isAxiosError } from 'axios';

export const usePostTodo = () => {
  const queryClient = useQueryClient();

  interface TodoPayload {
    categoryId: number;
    content: {
      content: string;
    };
  }

  const { mutate } = useMutation({
    mutationFn: async (payload: TodoPayload) => {
      const data = await instnace.post(
        `/feed/category/${payload.categoryId}/todo`,
        payload.content
      );
      return data.data;
    },
    onSuccess: data => {
      console.log(data);
      queryClient.invalidateQueries([keys.GET_POSTS]);
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        console.log((error.response.data as { errorMessage: string }).errorMessage);
      }
    },
  });

  return {
    postTodo: async (payload: TodoPayload) => {
      await mutate(payload);
    },
  };
};
