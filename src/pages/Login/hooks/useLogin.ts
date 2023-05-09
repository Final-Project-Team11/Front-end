import apis from '../../../api/axios/api';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from '../../../api/auth/CookieUtils';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import React from 'react';

type LoginResponse = {
  token: string;
  message: string;
  isFirst: boolean;
};

type UserLoginInfo = {
  companyId: string;
  userId: string;
  password: string;
};

export const useLogin = (loginUri: string) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  const login = useMutation<LoginResponse, Error, UserLoginInfo>({
    mutationFn: async (item: UserLoginInfo) => {
      const data = await apis.post<LoginResponse>(loginUri, item);
      return data.data;
    },
    onSuccess: data => {
      const token = data.token;
      if (data.isFirst) {
        setShowModal(true);
      } else {
        setCookie('token', token);
        navigate('/main');
      }
    },
    onError() {
      Swal.fire({
        icon: 'error',
        title: '입력 정보를 확인해주세요',
      });
    },
  });
  const loginHandler = async (data: UserLoginInfo) => {
    login.mutate(data);
  };

  return { loginHandler, showModal, setShowModal };
};
