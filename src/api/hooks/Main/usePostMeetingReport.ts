import { useMutation } from '@tanstack/react-query';
import React from 'react';
import apis from '../../axios/api';

interface Paylaod {
  postInfo?: {
    title?: string;
    body?: string;
    start?: Date;
    end?: Date;
    attendees?: string[];
    fileList?: File[] | undefined;
  };
  id: string | number | undefined;
}

const usePostMeetingReport = () => {
  const mutation = useMutation({
    mutationFn: async (payload: Paylaod) => {
      const formData = new FormData();
      const start = payload.postInfo?.start?.toString();
      const end = payload.postInfo?.end?.toString();

      payload.postInfo?.fileList?.map((item, index) => formData.append('file', item));
      formData.append('start', start || '');
      formData.append('end', end || '');
      formData.append('title', payload.postInfo?.title || '');
      formData.append('body', payload.postInfo?.body || '');
      payload.postInfo?.attendees?.map((item, index) =>
        formData.append(`attendees[${index}]`, item)
      );

      const data = await apis.post(`meeting/${payload.id}`, formData);
      return data.data;
    },
  });
  return mutation;
};

export default usePostMeetingReport;
