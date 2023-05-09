import { useMutation } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import Swal from 'sweetalert2';

type RePasswordResponse = {
  message: string;
  token: string;
};

type ChangePasswordInfo = {
  userId: string;
  password: string;
};

export const useRePassword = () => {
  const passwordChange = useMutation<RePasswordResponse, Error, ChangePasswordInfo>({
    mutationFn: async (item: ChangePasswordInfo) => {
      const password = {
        password: item.password,
      };
      const userId = item.userId;
      const data = await apis.patch(`users/password/${userId}`, password);
      return data.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: '비밀번호 변경이 완료 되었습니다',
        text: '변경된 비밀번호로 다시 로그인해주세요',
      });
    },
  });
  const patchPassword = (data: ChangePasswordInfo) => {
    passwordChange.mutate(data);
  };

  return { patchPassword };
};
