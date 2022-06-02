import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import StripeApi from './StripeApi';

type errorType = {
  message: string;
};
export const useStripePayment = () => {
  const payment = useMutation(StripeApi.stripePayment, {
    onSuccess: (data) => {
      toast.success('Payment is sent!');
    },
    onError: (err: errorType) => {
      toast.error(err.message || 'Something went wrong');
    },
  });

  return payment;
};
