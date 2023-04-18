import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { SignupInfo } from '../interfaces';
import instnace from '../../../axios/api';

export const useSignup = () => {
  const navigate = useNavigate();
  const signup = useMutation(
    async (item: SignupInfo) => {
      console.log('아이템', item);
      const data = await instnace.post(`/signUp`, item);
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
