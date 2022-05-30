import jwtDecode from 'jwt-decode';
import { useMutation } from 'react-query';
import { useStateValue } from '../../../providers/StateContext';
import Atuh from './Auth';

export const useRequestPassword = () => {
  const [{}, changeState] = useStateValue();

  const { mutate, isLoading, isError } = useMutation(
    Atuh.requestChangePassword,
    {
      onSuccess: (data) => {},
      onError: () => {},
    }
  );

  return {
    requestMutate: mutate,
    isLoading,
    isError,
  };
};
