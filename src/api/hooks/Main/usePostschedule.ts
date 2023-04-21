import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../axios/api';
import React from 'react';
import { keys } from '../../utils/createQueryKey';

interface Paylaod {
  postInfo?: {
    startDay?: string;
    endDay?: string;
    title?: string;
    location?: string;
    content?: string;
    ref?: string[]; //멘션
    file?: File | string;
    eventType?: string;
    startTime?: string;
  };
  url: string;
}

const usePostschedule = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload: Paylaod) => {
      console.log(payload);

      const formData = getFormData(payload);
      const data = await api.post(`/${payload.url}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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

const getFormData = (payload: Paylaod): FormData | undefined => {
  switch (payload.url) {
    case 'meeting': {
      const formData = new FormData();
      formData.append('file', payload.postInfo?.file || '');
      formData.append('startDay', payload.postInfo?.startDay || '');
      formData.append('startTime', payload.postInfo?.startTime || '');
      formData.append('title', payload.postInfo?.title || '');
      formData.append('content', payload.postInfo?.content || '');
      formData.append('file', payload.postInfo?.location || '');
      payload.postInfo?.ref?.map((item, index) => formData.append(`ref[${index}]`, item));
      formData.append('eventType', payload.postInfo?.eventType || '');
      formData.append('location', payload.postInfo?.location || '');
      return formData;
    }

    case 'report': {
      const formData = new FormData();
      formData.append('title', payload.postInfo?.title || '');
      formData.append('content', payload.postInfo?.content || '');
      payload.postInfo?.ref?.map((item, index) => formData.append(`ref[${index}]`, item));
      formData.append('file', payload.postInfo?.file || '');
      formData.append('enrollDay', payload.postInfo?.startDay || '');
      return formData;
    }

    case 'other': {
      const formData = new FormData();
      formData.append('startDay', payload.postInfo?.startDay || '');
      formData.append('endDay', payload.postInfo?.endDay || '');
      formData.append('title', payload.postInfo?.title || '');
      formData.append('content', payload.postInfo?.content || '');
      payload.postInfo?.ref?.map((item, index) => formData.append(`ref[${index}]`, item));
      formData.append('file', payload.postInfo?.file || '');
      return formData;
    }

    case 'vacation': {
      const formData = new FormData();
      formData.append('startDay', payload.postInfo?.startDay || '');
      formData.append('endDay', payload.postInfo?.endDay || '');
      formData.append('typeDetail', payload.postInfo?.eventType || '');
      return formData;
    }

    default:
      return undefined;
  }
};
