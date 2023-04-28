import { useMutation } from '@tanstack/react-query';
import React from 'react';
import apis from '../../axios/api';
import { CalendarProps } from '../../../pages/SubMain/interfaces';

interface Paylaod {
  title?: string;
  body?: string;
  start?: Date;
  end?: Date;
  attendees?: string[];
  fileList?: File[] | undefined;
}

const usePostReport = () => {
  const mutation = useMutation({
    mutationFn: async (payload: Paylaod) => {
      const formData = new FormData();
      const start = payload.start?.toString();
      const end = payload.end?.toString();
      payload.fileList?.map((item, index) => formData.append('file', item));
      formData.append('start', start || '');
      formData.append('end', end || '');
      formData.append('title', payload.title || '');
      formData.append('body', payload.body || '');
      payload.attendees?.map((item, index) =>
        formData.append(`attendees[${index}]`, item)
      );

      const data = await apis.post('./report', formData);
      return data.data;
    },

    onSuccess: config => {
      console.log('sucess', config);
    },
  });

  return mutation;
};

export default usePostReport;
