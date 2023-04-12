import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetVacations = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['GET_VACATION'], //posts get요청 key
    queryFn: async () => {
      const data = await axios.get('http://localhost:3001/vacation');
      return data.data;
    },
  });

  return {
    vacations: data,
    vacationsIsLoading: isLoading,
  };
};

// type 적용 아직안됨
