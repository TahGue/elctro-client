import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useTranslation } from 'next-i18next';
import toast from 'react-hot-toast';

export default function PaypalButton({
  amount,
  currency_code,
  onSuccess = (st) => console.log(st),
}) {
  const { t } = useTranslation();

  const [succeeded, setSucceeded] = useState(false);
  const [paypalErrorMessage, setPaypalErrorMessage] = useState('');
  const [orderID, setOrderID] = useState(false);
  const [billingDetails, setBillingDetails] = useState('');

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              currency_code: currency_code,
              // charge users $4.99 per order
              value: amount,
            },
          },
        ],

        // remove the applicaiton_context object if you need your users to add a shipping address
        application_context: {
          shipping_preference: 'NO_SHIPPING',
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        onSuccess(orderID);
        return orderID;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handles when a payment is confirmed by paypal
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setBillingDetails(payer);
      setSucceeded(true);
      toast.success(t('paymentAccepted'));
    });
  };

  // handles when a payment is declined
  const onError = (data, actions) => {
    toast.error(t('paymentError'));
  };

  return (
    <div>
      <PayPalButtons
        style={{
          color: 'blue',
          shape: 'pill',
          label: 'pay',
          tagline: false,
          layout: 'horizontal',
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </div>
  );
}
