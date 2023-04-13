import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../axios/api';
import React from 'react';
import { keys } from '../utils/createQueryKey';

interface Paylaod {
  schedule?: {
    startDay?: Date;
    endDay?: Date;
    title: string;
    location?: string;
    content?: string;
    ref?: string; //멘션
    file?: string;
  };

  other?: {
    startDay?: Date;
    endDay?: Date;
    title: string;
    content?: string;
    ref?: string; //멘션
    file?: string;
  };

  meeting?: {
    startDay?: Date;
    endDay?: Date;
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

  vacation?: {
    typeDetail?: string; //휴가 종류 or 일정 종류
    startDay?: Date;
    endDay?: Date;
  };

  url: string;
}

const usePostschedule = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (payload: Paylaod) => {
      const data = api.post(`/${payload.url}`, payload.vacation);
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
