import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import { keys } from '../../../api/utils/createQueryKey';
import DetailUser from '../components/DetailUser';

export const usePatchUser = () => {
  const queryClient = useQueryClient();

  interface PatchUserInfo {
    userId: string;
    patchUserData: DetailUser;
  }

  const { mutate } = useMutation({
    mutationFn: async (item: PatchUserInfo) => {
      const { userId, patchUserData } = item;
      const data = await apis.patch(`/users/${userId}`, patchUserData);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_USER_LIST]);
    },
  });
  return {
    patchUser: (userId: string, patchUserData: DetailUser) => {
      mutate({ userId, patchUserData });
    },
  };
};
