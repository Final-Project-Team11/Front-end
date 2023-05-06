import { useMutation, useQueryClient } from '@tanstack/react-query';
import apis from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { AxiosError } from 'axios';
import { VacationPayload } from '../../../components/MyPage/VacationTab/interfaces';
import { useRef } from 'react';

interface ErrorData {
  success: boolean;
  errorMessage: string;
}

export const usePutDecision = () => {
  const queryClient = useQueryClient();

  // 에러처리 세분화를 위한 useRef
  const shouldSkipErrorAlert = useRef(false);

  const { mutate } = useMutation({
    mutationFn: async (payload: VacationPayload) => {
      const result = await apis.put(`/vacation/${payload.Id}/${payload.status}`);
      return result.data;
    },

    // 요청 성공 시
    onSuccess: (data, payload) => {
      // 승인, 거절 메세지 세팅
      let titleMessage;
      let icon;
      if (payload.status === 'accept') {
        titleMessage = `${payload.userName} 님의 휴가가 등록되었습니다.`;
        icon = 'success';
      } else {
        titleMessage = `${payload.userName} 님의 휴가가 반려되었습니다.`;
        icon = 'error';
      }

      // 승인, 거절 알럿
      Swal.fire({
        position: 'center',
        icon: icon as SweetAlertIcon,
        title: titleMessage,
        showConfirmButton: false,
        timer: 1000,
      });
      queryClient.invalidateQueries([keys.GET_VACATION_LIST]);
    },

    // 요청 실패 시
    onError: (error: AxiosError<ErrorData>, payload) => {
      // 에러메세지 세팅
      if (error.response?.data.errorMessage === '남은 연차 일수가 부족합니다.') {
        const errorMessage = `<div style="font-size: 20px;">${payload.userName}님의 ${error.response?.data.errorMessage}</div> <div style="font-size: 20px;">휴가가 자동으로 반려됩니다.</div>`;

        const errorDeny: VacationPayload = {
          status: 'deny',
          Id: payload.Id,
          userName: payload.userName,
        };
        // 요청 실패 알럿
        Swal.fire({
          position: 'center',
          icon: 'error',
          html: errorMessage,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          shouldSkipErrorAlert.current = true; // 이미 휴가 연차 일수 부족할 시 아래의 에러처리 동작 안하게
          mutate(errorDeny);
        });
      } else if (!shouldSkipErrorAlert.current) {
        const errorMessage = error.response?.data.errorMessage;
        // 요청 실패 알럿
        Swal.fire({
          position: 'center',
          icon: 'error',
          html: errorMessage,
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        shouldSkipErrorAlert.current = false;
      }
    },
  });

  return {
    mutate,
  };
};
