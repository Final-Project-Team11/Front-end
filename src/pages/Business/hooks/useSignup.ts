import { useMutation } from '@tanstack/react-query';
import { UserSignupInfo } from '../interfaces';
import instnace from '../../../axios/api';

export const useSignup = () => {
  const signup = useMutation(
    async (item: UserSignupInfo) => {
      const data = await instnace.post(`/users`, item);
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
