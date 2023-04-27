import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';

const useGetWeeklyInfo = () => {
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_WEEKLY_INFO],
    queryFn: async () => {
      const today = new Date();
      const data = await apis.get(
        `/weeklySchedule?year=${today.getFullYear()}&month=${
          today.getMonth() + 1
        }&day=${today.getDate()}`
      );
      return data;
    },
  });
};

export default useGetWeeklyInfo;
