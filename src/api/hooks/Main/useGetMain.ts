import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { keys } from '../../utils/createQueryKey';
import api from '../../axios/api';

const useGetMain = (type: number) => {
  const today = new Date();
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_MAIN, type],
    queryFn: async () => {
      if (type === 0) {
        const data = await api.get(
          `/totalSchedule/2?year=${today.getFullYear()}&month=${today.getMonth() + 1}`
        );
        return data.data.main;
      } else if (type === 1) {
        const data = await api.get(
          `/totalVacation/2?year=${today.getFullYear()}&month=${today.getMonth() + 1}`
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
