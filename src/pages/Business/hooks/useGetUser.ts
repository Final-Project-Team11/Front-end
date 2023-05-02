import { useQuery } from '@tanstack/react-query';
import apis from '../../../api/axios/api';
import { keys } from '../../../api/utils/createQueryKey';

export interface Users {
  userId: string;
  userName: string;
  team: string;
  rank: string;
  joinDay: Date;
  job: string;
  salaryDay: number;
  authLevel: number;
}

export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_USER_LIST],
    queryFn: async () => {
      const response = await apis.get('/users');
      return response.data.users;
    },
  });

  return { data, isLoading };
};
