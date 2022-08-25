import { CheckoutApi } from './CheckoutApi';
import { useQuery } from 'react-query';

export const useAddress = () => {
  const { data, isLoading, isError } = useQuery(
    'addresses',
    CheckoutApi.getAllAddresses
  );

  return {
    data: localStorage.getItem('token') ? data : [],
    isLoading,
    isError,
  };
};
