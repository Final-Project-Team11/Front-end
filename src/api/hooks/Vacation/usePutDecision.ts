import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { VacationPayload } from '../../../components/VacationTab/interfaces';

interface ErrorData {
  success: boolean;
  errorMessage: string;
}

interface SuccessData {
  message: string;
}

export const usePutDecision = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (payload: VacationPayload) => {
      const result = await apis.put(`/vacation/${payload.Id}/${payload.status}`);
      return result.data;
    },

    // 요청 성공 시
    onSuccess: (data: SuccessData, payload) => {
      // 승인, 거절 메세지 세팅
      const titleMessage =
        data.message === '휴가가 등록되었습니다.'
          ? `${payload.userName} 님의 휴가가 등록되었습니다.`
          : `${payload.userName} 님의 휴가가 반려되었습니다.`;

      // 승인, 거절 알럿
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: titleMessage,
        showConfirmButton: false,
        timer: 1000,
      });
      queryClient.invalidateQueries([keys.GET_VACATION_LIST]);
    },

    // 요청 실패 시
    onError: (error: AxiosError<ErrorData>, payload) => {
      // 에러메세지 세팅
      const errorMessage =
        error.response?.data.errorMessage === '남은 연차 일수가 부족합니다.'
          ? `<span style="font-size: 25px;">${payload.userName}님의 ${error.response?.data.errorMessage}</span>`
          : error.response?.data.errorMessage;

      // 요청 실패 알럿
      Swal.fire({
        position: 'center',
        icon: 'error',
        html: errorMessage,
        showConfirmButton: false,
        timer: 1000,
      });
    },
  });

  return {
    mutate,
  };
};
