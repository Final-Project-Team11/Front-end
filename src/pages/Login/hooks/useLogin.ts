import apis from '../../../api/axios/api';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from '../../../api/auth/CookieUtils';
import { useNavigate } from 'react-router-dom';
import { AdminLoginInfo } from '../components/AdminLoginForm';
import { UserLoginInfo } from '../components/UserLoginForm';

export type LoginResponse = {
  token: string;
  message: string;
};
// hook에 uri와 콜백함수를 인수로 전달
export const useLogin = (reset: () => void, loginUri: string) => {
  const navigate = useNavigate();

  const login = useMutation<LoginResponse, Error, AdminLoginInfo | UserLoginInfo>({
    mutationFn: async (item: AdminLoginInfo | UserLoginInfo) => {
      const data = await apis.post<LoginResponse>(loginUri, item);
      return data.data;
    },
    onSuccess: data => {
      const token = data.token;
      setCookie('token', token);
      navigate('/main');
    },
    onError() {
      alert('아이디 혹은 비밀번호를 확인해주세요');
      reset();
    },
  });
  const loginHandler = (data: AdminLoginInfo | UserLoginInfo) => {
    login.mutate(data);
  };

  return { loginHandler };
};
