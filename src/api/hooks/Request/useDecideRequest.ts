import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

interface DecideParams {
  eventId: number;
  type: 'schedule' | 'other';
  types: 'accept' | 'deny';
}

export const useDecideRequest = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (params: DecideParams) => {
      const response = await apis.put(
        `/${params.type}/${params.eventId}/${params.types}`
      );
      return { ...response.data, params };
    },
    onSuccess: data => {
      queryClient.invalidateQueries([keys.GET_REQUEST_LIST, data.params.type]);
    },
  });
  return {
    decideRequest: mutate,
  };
};
