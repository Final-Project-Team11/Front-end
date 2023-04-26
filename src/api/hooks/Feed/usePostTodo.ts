import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { SentTodo } from '../../../components/Feed/interfaces';

export const usePostTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (payload: SentTodo) => {
      const data = await apis.post(
        `/feed/category/${payload.categoryId}/todo`,
        payload.content
      );
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_POSTS]);
    },
  });

  return {
    postTodo: async (payload: SentTodo) => {
      await mutate(payload);
    },
  };
};
