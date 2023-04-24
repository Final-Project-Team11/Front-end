import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

interface DecideParams {
  eventId: number;
  types: string;
}

export const useDecideRequest = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (params: DecideParams) => {
      const response = await apis.put(`/schedule/${params.eventId}/${params.types}`);
      console.log(response.data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_REQUEST_LIST]);
    },
  });
  return {
    decideRequest: mutate,
  };
};
