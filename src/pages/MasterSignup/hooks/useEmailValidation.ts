import { useMutation } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import React from 'react';
import Swal from 'sweetalert2';

type Request = {
  authNumber: string;
  checkNumber: string;
};

export const useEmailValidation = () => {
  const [emailValidation, setEmailValidation] = React.useState(false);
  const emailValidate = useMutation(
    async (item: Request) => {
      const data = await apis.post(`/members/email/check`, item);
      return data.data;
    },
    {
      onSuccess() {
        setEmailValidation(true);
        Swal.fire({
          icon: 'success',
          title: '인증되었습니다',
        });
      },
      onError() {
        Swal.fire({
          icon: 'error',
          title: '인증번호를 확인해 주세요',
        });
      },
    }
  );
  return { emailValidate, emailValidation, setEmailValidation };
};
