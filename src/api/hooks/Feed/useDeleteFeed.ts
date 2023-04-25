import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

interface Payload {
  type: 'category' | 'todo';
  id: number;
}

export const useDeleteFeed = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (payload: Payload) => {
      const data = await apis.delete(`feed/${payload.type}/${payload.id}`);

      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_POSTS]);
    },
  });

  return {
    deleteFeed: async (payload: Payload) => {
      await mutate(payload);
    },
  };
};
