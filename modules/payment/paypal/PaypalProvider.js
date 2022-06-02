import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import { useSettings } from '../../../hooks/useSettings';

export default function PaypalProvider({ children }) {
  const { paypalClientId, currency } = useSettings();

  return (
    <PayPalScriptProvider
      options={{
        'client-id': paypalClientId,
        intent: 'capture',
        currency: currency,
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
