import { useQuery } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import apis from '../../axios/api';

interface VacationStatus {
  status: 'submit' | 'accept' | 'deny';
}

export const useGetVacationStatus = () => {
  const { data } = useQuery({
    queryKey: [keys.GET_VACATION_STATUS],
    queryFn: async () => {
      const response = await apis.get('/vacationProgress');
      console.log(response);
      return response.data;
    },
  });
  return data;
};
