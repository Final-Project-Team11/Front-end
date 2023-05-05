import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import apis from '../../../api/axios/api';

type AdminSignupInfo = {
  companyId: string;
  password: string;
  companyName: string;
  address: string;
  ceoName: string;
  ceoNum: string;
  companyNum: string;
};

export const useSignup = () => {
  const navigate = useNavigate();
  const signup = useMutation(
    async (item: AdminSignupInfo) => {
      const data = await apis.post(`/members`, item);
      return data;
    },
    {
      onSuccess() {
        alert('가입이 완료되었습니다.');
        navigate('/login');
      },
      onError() {
        alert('가입에 실패하였습니다.');
      },
    }
  );
  return { signup };
};
