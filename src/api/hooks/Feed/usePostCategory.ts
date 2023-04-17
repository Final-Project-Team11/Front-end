import { useMutation, useQueryClient } from '@tanstack/react-query';
import instnace from '../../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const usePostCategory = () => {
  const queryClient = useQueryClient();

  interface CategoryPayload {
    category: string;
  }

  const { mutate } = useMutation({
    mutationFn: async (payload: CategoryPayload) => {
      const data = await instnace.post('/feed/category', payload);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_POSTS]);
    },
  });

  return {
    postCategory: async (payload: CategoryPayload) => {
      await mutate(payload);
    },
  };
};
