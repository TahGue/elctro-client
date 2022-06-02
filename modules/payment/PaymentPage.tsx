import React from 'react';
import { useStateValue } from '../../providers/StateContext';
import { calculatePrice } from '../../helpers/helper';

function PaymentPage() {
  const [{ cart }] = useStateValue();

  return <div>{calculatePrice(cart)}</div>;
}

export default PaymentPage;
