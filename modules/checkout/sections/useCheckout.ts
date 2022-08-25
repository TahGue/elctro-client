import { CheckoutApi } from './../CheckoutApi';
import { useMutation } from 'react-query';
import { useStateValue } from '../../../providers/StateContext';
import { SET_USER } from '../../../providers/stateTypes';
import jwtDecode from 'jwt-decode';
import toast from 'react-hot-toast';

export const useRegister = () => {
  const [{ user }, changeState] = useStateValue();

  return useMutation(CheckoutApi.register, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);

      changeState({
        type: SET_USER,
        payload: jwtDecode(data.token),
      });
    },
    onError: (err: { message: string }) => {
      toast.error(`Something went wrong: ${JSON.stringify(err.message)}`);
    },
  });
};
