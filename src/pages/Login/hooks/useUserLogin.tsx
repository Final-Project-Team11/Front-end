import { useMutation } from '@tanstack/react-query';
import { setCookie } from '../../../api/auth/CookieUtils';
import { useNavigate } from 'react-router-dom';
import { UserLoginInfo } from '../components/UserLoginForm';
import { LoginResponse } from './useAdminLogin';
import apis from '../../../api/axios/api';

export const useLogin = (reset: () => void) => {
  const navigate = useNavigate();

  const login = useMutation<LoginResponse, Error, UserLoginInfo>({
    mutationFn: async (item: UserLoginInfo) => {
      const data = await apis.post<LoginResponse>('/auth/user', item);
      return data.data;
    },
    onSuccess: data => {
      const token = data.token;
      setCookie('token', token);
      navigate('/main');
    },
    onError() {
      alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
      reset();
    },
  });

  const userLoginHandler = (data: UserLoginInfo) => {
    login.mutate(data);
  };

  return { userLoginHandler };
};
