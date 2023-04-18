import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../../axios/api';
import React from 'react';
import { keys } from '../../utils/createQueryKey';

interface Paylaod {
  postInfo?: {
    startDay?: string;
    endDay?: string;
    title?: string;
    location?: string;
    content?: string;
    ref?: string; //멘션
    file?: string;
  };
  url: string;
}

const usePostschedule = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (payload: Paylaod) => {
      const data = api.post(`/${payload.url}`, payload.postInfo);
      console.log('datapost', data);
      return data;
    },

    onSuccess: () => {
      console.log('success');

      queryClient.invalidateQueries([keys.GET_MAIN, 1]);
    },
  });

  return mutation;
};

export default usePostschedule;
