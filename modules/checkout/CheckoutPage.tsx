import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Empty from '../../components/empty/Empty';
import { calculatePrice } from '../../helpers/helper';
import { useStateValue } from '../../providers/StateContext';
import { Address } from '../../types/DBTypes';
import Cart from '../cart/cart/Cart';
import CartSummery from '../cart/cart/CartSummery';
import PaymentPage from '../payment/PaymentPage';
import AddressesCheckbox from './AddressesCheckbox';
import { CheckoutForm } from './CheckoutForm';
import ReviewCart from './ReviewCart';
import UserInfo from './sections/UserInfo';

function CheckoutPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const onSelectAddress = (address: Address) => {
    console.log(address);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={8} md={6} sm={12}>
            <UserInfo
              isActive={currentPage === 0}
              onGoNext={() => setCurrentPage(currentPage + 1)}
            />
            <div> Shipping method</div>
            <div> payment </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CheckoutPage;
