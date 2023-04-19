import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AdminLoginInfo } from '../../MasterSignup/interfaces';
import instnace from '../../../axios/api';
import { setCookie } from '../../../auth/CookieUtils';
import React from 'react';

export interface AdminLoginResponse {
  token: string;
  message: string;
}

export const useLogin = () => {
  const navigate = useNavigate();

  const [adminLoginInfo, setAdminLoginInfo] = React.useState<AdminLoginInfo>({
    companyId: '',
    password: '',
  });

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setAdminLoginInfo({ ...adminLoginInfo, [name]: value });
  };

  const login = useMutation<AdminLoginResponse, Error, AdminLoginInfo>({
    mutationFn: async (item: AdminLoginInfo) => {
      const data = await instnace.post<AdminLoginResponse>('/adminlogin', item);
      console.log('데이터', data);
      return data.data;
    },
    onSuccess: data => {
      const token = data.token;
      alert(data.message);
      setCookie('token', token);
      navigate('/main');
    },
    onError() {
      alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
      setAdminLoginInfo({ companyId: '', password: '' });
    },
  });
  const submitLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.mutate(adminLoginInfo);
  };
  return { adminLoginInfo, submitLoginHandler, changeInputHandler };
};
