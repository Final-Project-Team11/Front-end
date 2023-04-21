import { useMutation } from 'react-query';
import apis from '../../../api/axios/api';
import { useNavigate } from 'react-router-dom';

interface RePassword {
  password: string;
}

export const useRePassword = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async (item: RePassword) => {
      const { password } = item;
      const data = await apis.patch(`login/rePassword`, { password });
      return data.data;
    },
    onSuccess: () => {
      alert('비밀번호 변경이 완료 되었습니다.');
      navigate('/main');
    },
  });
  return {
    patchPassword: (item: string) => {
      const password = { password: item };
      mutate(password);
    },
  };
};
