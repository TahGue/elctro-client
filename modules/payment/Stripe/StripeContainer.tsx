import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useSettings } from '../../../hooks/useSettings';
import CircleLoader from '../../../components/loaders/CircleLoader';
import { CheckoutForm } from '../../checkout/CheckoutForm';

type IProps = {
  children: React.ReactNode;
};
const StripeContainer = ({ children }: IProps) => {
  const { stripePublicKey } = useSettings();

  if (!stripePublicKey || stripePublicKey === '') {
    return <CircleLoader />;
  }

  return <Elements stripe={loadStripe(stripePublicKey)}>{children}</Elements>;
};

export default StripeContainer;
