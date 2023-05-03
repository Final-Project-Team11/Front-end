import apis from '../../../api/axios/api';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from '../../../api/auth/CookieUtils';
import { useNavigate } from 'react-router-dom';
import { AdminLoginInfo } from '../components/AdminLoginForm';
import { UserLoginInfo } from '../components/UserLoginForm';
import Swal from 'sweetalert2';

export type LoginResponse = {
  token: string;
  message: string;
};
// hook에 uri와 콜백함수를 인수로 전달
export const useLogin = (loginUri: string) => {
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
      Swal.fire({
        icon: 'error',
        title: '입력 정보를 확인해주세요',
      });
    },
  });
  const loginHandler = (data: AdminLoginInfo | UserLoginInfo) => {
    login.mutate(data);
  };

  return { loginHandler };
};
