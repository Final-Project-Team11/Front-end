import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const usePatchTag = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (mentionId: number) => {
      const data = await apis.patch(`/mentionedSchedule/${mentionId}`);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_TAG]);
    },
  });

  return {
    tagCheck: mutate,
  };
};
