import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import { keys } from '../../../api/utils/createQueryKey';
import React from 'react';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (userId: string) => {
      const data = await apis.delete(`users/${userId}`);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_USER_LIST]);
    },
  });
  return {
    deleteUser: (userId: string) => {
      mutate(userId);
    },
  };
};
