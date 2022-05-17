import { useMutation } from 'react-query';
import Atuh from '../../api/Auth';
import { useStateValue } from '../../providers/StateContext';

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
