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

interface Test {
  //   data: AxiosResponse | undefined;
  data: Users[];
  isLoading: boolean;
}

export const useGetUser = (): Test => {
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_USER_LIST],
    queryFn: async () => {
      const response = await apis.get('/users');
      return response.data.users;
    },
  });

  return { data, isLoading };
};
