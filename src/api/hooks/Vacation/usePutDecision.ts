import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

interface Payload {
  status: 'submit' | 'accept' | 'deny';
  Id: number;
}

export const usePutDecision = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (payload: Payload) => {
      const result = await apis.put(`/vacation/${payload.Id}/${payload.status}`);
      return result.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_VACATION_LIST]);
    },
  });

  return {
    mutate,
  };
};
