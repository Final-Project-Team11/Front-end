import { useMutation } from '@tanstack/react-query';
import { LoginInfo } from '../../MasterSignup/interfaces';
import apis from '../../../api/axios/api';
import { setCookie } from '../../../api/auth/CookieUtils';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface LoginResponse {
  token: string;
  message: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };

  const [loginInfo, setLoginInfo] = React.useState<LoginInfo>({
    companyId: '',
    userId: '',
    password: '',
  });

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const login = useMutation<LoginResponse, Error, LoginInfo>({
    mutationFn: async (item: LoginInfo) => {
      const data = await apis.post<LoginResponse>('/login', item);
      return data.data;
    },
    onSuccess: data => {
      const token = data.token;
      setCookie('token', token);
      alert('로그인 성공');
      navigate('/main');

      // if (loginInfo.userId === loginInfo.password) {
      //   setShowModal(true);
      // }
    },
    onError() {
      alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
      setLoginInfo({ companyId: '', userId: '', password: '' });
    },
  });

  const submitLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.mutate(loginInfo);
  };
  return { loginInfo, submitLoginHandler, changeInputHandler, showModal, closeModal };
};
