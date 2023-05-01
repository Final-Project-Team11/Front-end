import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

interface Paylaod {
  postInfo?: {
    startDay?: Date | string;
    endDay?: Date | string;
    title?: string;
    location?: string;
    content?: string;
    ref?: string[]; //멘션
    file?: File[] | string;
    eventType?: string;
    startTime?: string;
  };
  url: string;
}

const usePostVacation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload: Paylaod) => {
      const data = await apis.post(`/${payload.url}`, payload.postInfo);

      return data;
    },
    onSuccess: () => {
      const today = new Date();
      queryClient.invalidateQueries([keys.GET_MAIN, true, today.getMonth() + 1]);
    },
  });

  return mutation;
};

export default usePostVacation;
