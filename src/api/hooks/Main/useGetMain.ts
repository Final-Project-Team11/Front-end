import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { keys } from '../../utils/createQueryKey';
import api from '../../axios/api';
import { getCookie } from '../../auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';

const useGetMain = (type: boolean) => {
  const today = new Date();
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_MAIN, type],
    queryFn: async () => {
      const token = getCookie('token');
      const decoded = token && jwtDecode<JwtPayload>(token);
      const teamId = decoded.teamId;

      if (type === false) {
        const data = await api.get(
          `/totalSchedule/${teamId}?year=${today.getFullYear()}&month=${
            today.getMonth() + 1
          }`
        );
        return data.data.main;
      } else if (type === true) {
        const data = await api.get(
          `/totalVacation/${teamId}?year=${today.getFullYear()}&month=${
            today.getMonth() + 1
          }`
        );

        return data.data.main.vacation;
      }
    },
    onSuccess: () => {
      console.log('success');
    },
  });
  return { data, isLoading };
};

export default useGetMain;
