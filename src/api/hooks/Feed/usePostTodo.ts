import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
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
      const data = await apis.post(
        `/feed/category/${payload.categoryId}/todo`,
        payload.content
      );
      return data.data;
    },
    onSuccess: data => {
      queryClient.invalidateQueries([keys.GET_POSTS]);
    },
  });

  return {
    postTodo: async (payload: TodoPayload) => {
      await mutate(payload);
    },
  };
};
