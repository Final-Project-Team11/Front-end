import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../axios/api';
import React from 'react';
import { keys } from '../../utils/createQueryKey';

interface Paylaod {
  postInfo?: {
    Id?: string | number;
    calendarId?: string;
    title?: string;
    body?: string;
    start?: Date;
    end?: Date;
    attendees?: string[];
    location?: string;
    userId?: string;
    userName?: string;
    fileList?: File[] | undefined;
  };
  url: string;
}

const usePostschedule = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload: Paylaod) => {
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
      queryClient.invalidateQueries([keys.GET_MAIN]);
    },
  });

  return mutation;
};

export default usePostschedule;

const getFormData = (payload: Paylaod): FormData | undefined => {
  const start = payload.postInfo?.start?.toString();
  const end = payload.postInfo?.end?.toString();
  const formData = new FormData();
  switch (payload.url) {
    case 'meeting': {
      console.log('meeting');
      payload.postInfo?.fileList?.map(item => formData.append('file', item));
      formData.append('start', start || '');
      formData.append('end', end || '');
      formData.append('title', payload.postInfo?.title || '');
      formData.append('body', payload.postInfo?.body || '');

      if (payload.postInfo?.location !== undefined && payload.postInfo?.location !== '') {
        formData.append('location', payload.postInfo?.location || '');
      }

      formData.append('calendarId', payload.postInfo?.calendarId || '');
      payload.postInfo?.attendees?.map((item, index) => {
        console.log('attendees');
        return formData.append(`attendees[${index}]`, item);
      });

      return formData;
    }

    case 'report': {
      formData.append('title', payload.postInfo?.title || '');
      formData.append('body', payload.postInfo?.body || '');
      payload.postInfo?.attendees?.map((item, index) =>
        formData.append(`attendees[${index}]`, item)
      );
      payload.postInfo?.fileList?.map(item => formData.append('file', item));
      formData.append('start', start || '');
      return formData;
    }

    case 'other': {
      formData.append('start', start || '');
      formData.append('end', end || '');
      formData.append('title', payload.postInfo?.title || '');
      formData.append('body', payload.postInfo?.body || '');

      payload.postInfo?.attendees?.map((item, index) =>
        formData.append(`attendees[${index}]`, item)
      );
      payload.postInfo?.fileList?.map(item => formData.append('file', item));
      return formData;
    }

    case 'schedule': {
      formData.append('start', start || '');
      formData.append('end', end || '');
      formData.append('title', payload.postInfo?.title || '');
      formData.append('body', payload.postInfo?.body || '');

      if (payload.postInfo?.location !== undefined && payload.postInfo?.location !== '') {
        formData.append('location', payload.postInfo?.location || '');
      }
      payload.postInfo?.attendees?.map((item, index) =>
        formData.append(`attendees[${index}]`, item)
      );
      payload.postInfo?.fileList?.map(item => formData.append('file', item));
      return formData;
    }

    default:
      return undefined;
  }
};
