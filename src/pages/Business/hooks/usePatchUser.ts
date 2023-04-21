import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import { keys } from '../../../api/utils/createQueryKey';

export const usePatchUser = () => {
  const queryClient = useQueryClient();

  interface PatchUserInfo {
    userId: string;
    patchUserInfo: object;
  }

  const { mutate } = useMutation({
    mutationFn: async (item: PatchUserInfo) => {
      const { userId, patchUserInfo } = item;
      const data = await apis.patch(`/users/${userId}`, patchUserInfo);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_USER_LIST]);
    },
  });
  return {
    patchUser: (userId: string, patchUserInfo: object) => {
      mutate({ userId, patchUserInfo });
    },
  };
};
