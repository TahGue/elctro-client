import jwtDecode from 'jwt-decode';
import { useMutation } from 'react-query';
import Atuh from '../../api/Auth';
import { useStateValue } from '../../providers/StateContext';
import { SET_USER } from '../../providers/stateTypes';

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
