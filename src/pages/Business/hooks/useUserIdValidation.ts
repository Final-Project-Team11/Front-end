import React from 'react';
import { useMutation } from '@tanstack/react-query';
import instnace from '../../../axios/api';

export const useUserIdValidation = () => {
  const [userIdValidation, setUserIdValidation] = React.useState<boolean>(false);
  const validUserId = (userId: string): boolean => /^[a-zA-Z0-9]{5,}$/.test(userId);
  // 알파벳 소, 대문자,숫자로 이루어진 5자 이상

  const checkUserId = useMutation(
    async (item: string) => {
      const data = await instnace.post(`/idCheck`, {
        userId: item,
      });
      return data;
    },
    {
      onSuccess() {
        alert('사용가능한 아이디 입니다.');
        setUserIdValidation(true);
      },
      onError() {
        alert('중복된 아이디 입니다. 다른 아이디를 입력해주세요');
        setUserIdValidation(false);
      },
    }
  );
  return { validUserId, checkUserId, userIdValidation, setUserIdValidation };
};
