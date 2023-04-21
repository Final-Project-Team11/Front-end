import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AdminSignupInfo } from '../interfaces';
import apis from '../../../api/axios/api';

export const useSignup = () => {
  const navigate = useNavigate();
  const signup = useMutation(
    async (item: AdminSignupInfo) => {
      const data = await apis.post(`/signUp`, item);
      return data;
    },
    {
      onSuccess() {
        alert('가입이 완료되었습니다.');
        navigate('/');
      },
      onError() {
        alert('가입에 실패하였습니다.');
      },
    }
  );
  return { signup };
};
