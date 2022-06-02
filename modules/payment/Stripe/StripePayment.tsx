import React from 'react';
import StripeContainer from './StripeContainer';
import StripeForm from './StripeForm';

function StripePayment() {
  return (
    <StripeContainer>
      <StripeForm
        onPayment={(id: string) => alert(`paid with id ${id}`)}
        onError={(err) => alert (JSON.stringify( err) ) }
      />
    </StripeContainer>
  );
}

export default StripePayment;
