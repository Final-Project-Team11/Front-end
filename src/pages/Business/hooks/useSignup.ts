import { useMutation } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import Swal from 'sweetalert2';

type UserSignupInfo = {
  userName: string;
  team: string;
  rank: string;
  job: string;
  salaryDay: number;
  joinDay: Date;
  authLevel: number | string;
  userId: string;
};

export const useSignup = () => {
  const signup = useMutation(
    async (item: UserSignupInfo) => {
      const data = await apis.post(`/users`, item);
      return data;
    },
    {
      onSuccess() {
        Swal.fire({
          icon: 'success',
          title: '가입이 완료 되었습니다',
        });
      },
      onError() {
        Swal.fire({
          icon: 'error',
          title: '가입에 실패하였습니다.',
          text: '입력 정보를 확인해주세요',
        });
      },
    }
  );
  return { signup };
};
