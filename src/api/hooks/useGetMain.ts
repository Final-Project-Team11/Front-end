import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { keys } from '../utils/createQueryKey';
import api from '../../axios/api';

const useGetMain = () => {
  const { data, isLoading } = useQuery({
    queryKey: keys.GET_MAIN,
    queryFn: async () => {
      const data = await api.get('/main');
      return data.data;
    },
  });

  return { data, isLoading };
};

export default useGetMain;
