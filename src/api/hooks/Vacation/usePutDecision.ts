import { useMutation, useQueryClient } from '@tanstack/react-query';
import instnace from '../../../axios/api';
import { keys } from '../../utils/createQueryKey';

interface Payload {
  status: 'submit' | 'accept' | 'deny';
  eventId: number;
}

export const usePutDecision = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (payload: Payload) => {
      const result = await instnace.put(`/vacation/${payload.eventId}/${payload.status}`);
      return result.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_VACATION_LIST]);
      console.log('@@@@@@@@@@@@@@', mutate);
    },
  });

  return {
    mutate,
  };
};
