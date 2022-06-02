import React from 'react';
import { useStateValue } from '../../providers/StateContext';
import { calculatePrice } from '../../helpers/helper';
import StripeContainer from './Stripe/StripeContainer';
import StripePayment from './Stripe/StripePayment';

function PaymentPage() {
  const [{ cart }] = useStateValue();

  return (
    <div className='p-3 w-1/2 justify-center m-auto '>
      <StripePayment />
    </div>
  );
}

export default PaymentPage;
