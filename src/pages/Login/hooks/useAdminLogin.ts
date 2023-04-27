import { useMutation } from '@tanstack/react-query';
import { setCookie } from '../../../api/auth/CookieUtils';
import { useNavigate } from 'react-router-dom';
import { AdminLoginInfo } from '../components/AdminLoginForm';
import apis from '../../../api/axios/api';

export type LoginResponse = {
  token: string;
  message: string;
};

export const useAdminLogin = (reset: () => void) => {
  const navigate = useNavigate();

  const login = useMutation<LoginResponse, Error, AdminLoginInfo>({
    mutationFn: async (item: AdminLoginInfo) => {
      const data = await apis.post<LoginResponse>('/auth/admin', item);
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
  const AdminLoginHandler = (data: AdminLoginInfo) => {
    login.mutate(data);
  };

  return { AdminLoginHandler };
};
