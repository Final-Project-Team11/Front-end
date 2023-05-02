import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { PatchFeedPayload } from '../../../components/Feed/interfaces';
import { keys } from '../../utils/createQueryKey';

export const usePatchFeed = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (payload: PatchFeedPayload) => {
      const response = await apis.patch(
        `/feed/${payload.feed}/${payload.id}`,
        payload.content
      );
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_POSTS]);
    },
  });
  return {
    mutate,
  };
};
