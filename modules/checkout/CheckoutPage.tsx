import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Empty from '../../components/empty/Empty';
import { calculatePrice } from '../../helpers/helper';
import { useStateValue } from '../../providers/StateContext';
import { Address } from '../../types/DBTypes';
import CartSummery from '../cart/cart/CartSummery';
import PaymentPage from '../payment/PaymentPage';
import AddressesCheckbox from './AddressesCheckbox';
import { CheckoutForm } from './CheckoutForm';
import ReviewCart from './ReviewCart';

function CheckoutPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const onSelectAddress = (address: Address) => {
    console.log(address);
  };
  return (
    <>
      {currentPage === 0 && (
        <ReviewCart onGoNext={() => setCurrentPage(currentPage + 1)} />
      )}
      {currentPage === 1 && (
        <AddressesCheckbox
          onSelect={setSelectedAddress}
          selectedAddress={selectedAddress || null}
          onGoNext={() => setCurrentPage(currentPage + 1)}
        />
      )}
      {currentPage === 2 && <PaymentPage />}
    </>
  );
}

export default CheckoutPage;
