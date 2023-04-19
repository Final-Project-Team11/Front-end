import { useQueryClient } from '@tanstack/react-query';
import { keys } from '../../utils/createQueryKey';
import instnace from '../../../axios/api';

export const useGetRequestDetail = () => {
  const queryClient = useQueryClient();

  const detail = async (id: number) => {
    const response = await instnace.get(`/schedule/${id}`);
    queryClient.setQueryData([keys.GET_REQUEST_DETAIL], response.data);
  };

  return {
    detail,
  };
};
