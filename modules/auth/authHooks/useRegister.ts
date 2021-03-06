import jwtDecode from 'jwt-decode';
import { useMutation } from 'react-query';
import { useStateValue } from '../../../providers/StateContext';
import { SET_USER } from '../../../providers/stateTypes';
import Atuh from './Auth';

export const useRegister = () => {
  const [{}, changeState] = useStateValue();

  const { mutate, isLoading, isError } = useMutation(Atuh.register, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);

      changeState({
        type: SET_USER,
        payload: jwtDecode(data.token),
      });
    },
    onError: () => {
      console.log('register error');
    },
  });

  return {
    registerMutate: mutate,
    isLoading,
    isError,
  };
};
