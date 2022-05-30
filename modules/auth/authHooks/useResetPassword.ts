import { useMutation } from 'react-query';
import { useStateValue } from '../../../providers/StateContext';
import Atuh from './Auth';

export const useResetPassword = () => {
  const [{}, changeState] = useStateValue();

  const { mutate, isLoading, isError } = useMutation(Atuh.resetPassword, {
    onSuccess: (data) => {},
    onError: () => {},
  });

  return {
    resetMutate: mutate,
    isLoading,
    isError,
  };
};
