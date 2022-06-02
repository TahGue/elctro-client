import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

type IProps = {
  onPayment: (paymentMethod: any) => void;
  onError: (paymentMethod: any) => void;
};
function StripeForm({ onPayment, onError }: IProps) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      currency: 'usd',
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        onPayment(id);
      } catch (error) {
        onError(error);
      }
    } else {
      onError(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
}

export default StripeForm;
