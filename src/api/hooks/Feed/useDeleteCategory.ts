import { useMutation, useQueryClient } from '@tanstack/react-query';
import instnace from '../../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (categoryId: number) => {
      const data = await instnace.delete(`feed/category/${categoryId}`);

      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_POSTS]);
    },
  });

  return {
    deleteCategory: async (categoryId: number) => {
      await mutate(categoryId);
    },
  };
};
