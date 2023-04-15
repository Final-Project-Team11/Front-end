import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../axios/api';
import React from 'react';
import { keys } from '../utils/createQueryKey';

interface Paylaod {
  schedule?: {
    startDay?: string;
    endDay?: string;
    title: string;
    location?: string;
    content?: string;
    ref?: string; //멘션
    file?: string;
  };

  other?: {
    startDay?: string;
    endDay?: string;
    title: string;
    content?: string;
    ref?: string; //멘션
    file?: string;
  };

  meeting?: {
    startDay?: string;
    endDay?: string;
    title: string;
    location?: string;
    content?: string;
    ref?: string; //멘션
    file?: string;
  };

  report?: {
    title: string;
    content?: string;
    ref?: string; //멘션
    file?: string;
  };

  postInfo?: {
    typeDetail?: string; //휴가 종류 or 일정 종류
    startDay?: string;
    endDay?: string;
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
