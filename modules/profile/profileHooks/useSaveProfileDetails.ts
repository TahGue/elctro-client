import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import Profile from '../api/Profile';

type ErrorType = {
  message: string | undefined;
};

export const useSaveProfileDetails = () => {
  return useMutation(Profile.saveUserDetails, {
    onSuccess: (data) => {
      toast.success('Details are saved successfully!');
    },
    onError: (err: ErrorType) => {
      toast.error(
        err.message ? `Error ${err.message}` : `Something went wrong`
      );
    },
  });
};
