import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCart } from '../../../hooks/useCart';
import { useQuickPayOrder } from '../../../hooks/useOrder';
import { useCheckPayment } from '../../../hooks/useQuickPay';

function EmbedQuickPay({ url, paymentId, shippingAddress, onSuccess }) {
  const [success, setSuccess] = useState(false);
  const saveOrder = useQuickPayOrder();
  const { data: cart } = useCart();
  const { data: paymentStatus, isLoading: isLoadingPaymentStatus } =
    useCheckPayment(paymentId);

  useEffect(() => {
    if (paymentStatus && paymentStatus.accepted === true) {
      setSuccess(true);
      saveOrder.mutate(
        {
          cartId: cart?.id,
          shippingAddressId: shippingAddress?.id,
          paymentId,
        },
        {
          onSuccess: () => {
            onSuccess();
          },
        }
      );
    }
  }, [paymentStatus]);
  return (
    <div>
      <iframe style={{ width: '100%', minHeight: 500 }} src={url}></iframe>
    </div>
  );
}

export default EmbedQuickPay;
