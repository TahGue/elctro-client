import { CheckoutApi } from '../CheckoutApi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';

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

export const useSaveAddress = () => {
  const queryClient = useQueryClient();

  return useMutation(CheckoutApi.saveAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries('addresses');
      toast.success('address added successfully!');
    },
  });
};
