import { useMutation } from '@tanstack/react-query';
import { UserSignupInfo } from '../interfaces';
import apis from '../../../api/axios/api';

export const useSignup = () => {
  const signup = useMutation(
    async (item: UserSignupInfo) => {
      const data = await apis.post(`/users`, item);
      return data;
    },
    {
      onSuccess() {
        alert('가입이 완료되었습니다.');
      },
      onError() {
        alert('가입에 실패하였습니다.');
      },
    }
  );
  return { signup };
};
