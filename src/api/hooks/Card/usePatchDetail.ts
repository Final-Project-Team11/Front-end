import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const usePatchDetail = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (payload: FormData) => {
      const response = await apis.patch('/usersInfo/profile', payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_CARD_DETAIL]);
      queryClient.invalidateQueries([keys.GET_CARD_INFO]);
    },
  });
  return {
    mutate,
  };
};