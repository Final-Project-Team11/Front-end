import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useAcceptRequest = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (eventId: number) => {
      const response = await apis.put(`/schedule/${eventId}/accept`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_REQUEST_LIST]);
    },
  });
  return {
    acceptRequest: mutate,
  };
};
