import React from 'react';
import { useMutation } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import Swal from 'sweetalert2';

export const useUserIdValidation = () => {
  const [userIdValidation, setUserIdValidation] = React.useState<boolean>(false);

  // 알파벳 소, 대문자,숫자로 이루어진 5자 이상
  const validUserId = (userId: string) => {
    const isValid = /^[a-zA-Z0-9]{5,}$/.test(userId);
    setUserIdValidation(isValid);
  };

  const checkUserId = useMutation(
    async (item: string) => {
      const data = await apis.post(`/users/${item}/check`, {
        userId: item,
      });
      return data;
    },
    {
      onSuccess() {
        Swal.fire({
          icon: 'success',
          title: '사용 가능한 아이디 입니다',
        });
      },
      onError() {
        Swal.fire({
          icon: 'question',
          title: '중복된 아이디 입니다',
          text: '다른 아이디를 입력해주세요',
        });
        setUserIdValidation(false);
      },
    }
  );
  return { validUserId, checkUserId, userIdValidation, setUserIdValidation };
};
