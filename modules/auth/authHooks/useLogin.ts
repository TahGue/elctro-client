import jwtDecode from 'jwt-decode';
import { useMutation } from 'react-query';
import Atuh from './Auth';
import { useStateValue } from '../../../providers/StateContext';
import { SET_USER } from '../../../providers/stateTypes';

export const useLogin = () => {
  const [{}, changeState] = useStateValue();

  const { mutate, isLoading, isError } = useMutation(Atuh.login, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);

      changeState({
        type: SET_USER,
        payload: jwtDecode(data.token),
      });
    },
    onError: () => {
      console.log('login error');
    },
  });

  return {
    loginMutate: mutate,
    isLoading,
    isError,
  };
};
