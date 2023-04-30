import React from 'react';
import { useMutation } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import Swal from 'sweetalert2';

export const useCompanyIdValidation = () => {
  const [companyIdValidation, setCompanyIdValidation] = React.useState<boolean>(false);

  // 알파벳 소, 대문자,숫자로 이루어진 5자 이상
  const validcompanyId = (item: string) => {
    const validId = /^[a-zA-Z0-9]{5,}$/.test(item);
    setCompanyIdValidation(validId);
  };

  const checkCompanyId = useMutation(
    async (item: string) => {
      const data = await apis.post(`/members/exists`, {
        companyId: item,
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
        setCompanyIdValidation(false);
      },
    }
  );
  return { validcompanyId, checkCompanyId, companyIdValidation };
};
