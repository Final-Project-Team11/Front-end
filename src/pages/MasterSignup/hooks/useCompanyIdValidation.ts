import React, { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import Swal from 'sweetalert2';

export const useCompanyIdValidation = () => {
  const [companyId, setCompanyId] = React.useState<string>('');
  const [companyIdValidation, setCompanyIdValidation] = React.useState<boolean>(false);

  useEffect(() => {
    if (companyIdValidation) {
      checkCompanyId.mutate(companyId);
    }
  }, [companyIdValidation, companyId]);

  const validcompanyId = (item: string) => {
    const isValid = /^[a-zA-Z0-9]{5,}$/.test(item);
    setCompanyIdValidation(isValid);

    if (!isValid) {
      Swal.fire({
        icon: 'error',
        title: '유효하지 않은 아이디 입니다.',
        text: '아이디 양식을 다시 재확인 해주세요.',
      });
    } else {
      setCompanyId(item);
    }
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
  return { validcompanyId, companyIdValidation, setCompanyIdValidation };
};
