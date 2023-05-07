import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { Payload } from '../../../components/Card/interfaces';

export const usePatchDetail = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (payload: Payload) => {
      // 업데이트에 보낼 formData 세팅
      const formData = new FormData();
      if (payload.file) {
        formData.append('file', payload.file);
      }
      formData.append('birthDay', payload.birthDay);
      formData.append('phoneNum', payload.phoneNum);

      const response = await apis.patch('/usersInfo/profile', formData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([keys.GET_CARD_DETAIL]);
      queryClient.invalidateQueries([keys.GET_CARD_INFO]);
    },
  });
  return {
    mutate,
  };
};
