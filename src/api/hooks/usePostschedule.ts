import { useMutation } from '@tanstack/react-query';
import api from '../../axios/api';
import React from 'react';

interface Paylaod {
  startDay?: Date;
  endDay?: Date;
  title: string;
  location?: string;
  content?: string;
  ref?: string; //멘션
  file?: string;
  typeDetail?: string; //휴가 종류 or 일정 종류
  type?: number; //일정,휴가....
  result?: string;
}

const usePostschedule = () => {
  const mutation = useMutation({
    mutationFn: async (payload: Paylaod) => {
      const data = api.post(`${payload.result}`);
    },
  });
};

export default usePostschedule;
