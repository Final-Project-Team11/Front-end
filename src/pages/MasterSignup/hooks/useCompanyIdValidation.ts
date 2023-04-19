import React from 'react';
import { useMutation } from '@tanstack/react-query';
import apis from '../../../api/axios/api';

export const useCompanyIdValidation = () => {
  const [companyIdValidation, setCompanyValidation] = React.useState<boolean>(false);
  const validcompanyId = (companyId: string): boolean =>
    /^[a-zA-Z0-9]{5,}$/.test(companyId);
  // 알파벳 소, 대문자,숫자로 이루어진 5자 이상

  const checkCompanyId = useMutation(
    async (item: string) => {
      const data = await apis.post(`/idCheck`, {
        companyId: item,
      });
      return data;
    },
    {
      onSuccess() {
        alert('사용가능한 아이디 입니다.');
        setCompanyValidation(true);
      },
      onError() {
        alert('중복된 아이디 입니다. 다른 아이디를 입력해주세요');
        setCompanyValidation(false);
      },
    }
  );
  return { validcompanyId, checkCompanyId, companyIdValidation, setCompanyValidation };
};
