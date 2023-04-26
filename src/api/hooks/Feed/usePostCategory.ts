import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { SentCategory } from '../../../components/Feed/interfaces';

export const usePostCategory = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (payload: SentCategory) => {
      const data = await apis.post('/feed/category', payload);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_POSTS]);
    },
  });

  return {
    postCategory: async (payload: SentCategory) => {
      await mutate(payload);
    },
  };
};
