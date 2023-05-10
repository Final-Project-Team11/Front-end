import { useMutation } from '@tanstack/react-query';
import React from 'react';
import apis from '../../../api/axios/api';
import Swal from 'sweetalert2';

export const useSendEmail = () => {
  const [authNumber, setAuthNumber] = React.useState('');

  const emailAuthentication = useMutation(
    async (item: string) => {
      const email = {
        email: item,
      };
      const data = await apis.post(`members/email`, email);
      return data.data.authNumber;
    },
    {
      onSuccess(data) {
        Swal.fire({
          icon: 'success',
          title: '이메일이 발송되었습니다',
        });
        setAuthNumber(data);
      },
    }
  );
  return { emailAuthentication, authNumber };
};
