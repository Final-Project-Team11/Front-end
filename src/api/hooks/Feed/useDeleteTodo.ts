import { useMutation, useQueryClient } from '@tanstack/react-query';
import instnace from '../../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (todoId: number) => {
      const data = await instnace.delete(`feed/todo/${todoId}`);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_POSTS]);
    },
  });

  return {
    deleteTodo: async (todoId: number) => {
      await mutate(todoId);
    },
  };
};
