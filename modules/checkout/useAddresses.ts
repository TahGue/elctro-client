import { useQuery } from 'react-query';
import { AddressApi } from './AddressApi';

export const useAddress = () => {
  const { data, isLoading, isError } = useQuery('addresses', AddressApi.getAll);

  return {
    data,
    isLoading,
    isError,
  };
};
