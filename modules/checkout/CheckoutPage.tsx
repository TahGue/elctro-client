import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Empty from '../../components/empty/Empty';
import { calculatePrice } from '../../helpers/helper';
import { useStateValue } from '../../providers/StateContext';
import CartSummery from '../cart/cart/CartSummery';
import { CheckoutForm } from './CheckoutForm';

function CheckoutPage() {
  const [{ cart }] = useStateValue();

  if (cart.length <= 0)
    return (
      <Empty
        title='Empty cart'
        subTitle='Your cart is empty'
        buttonLink='/shop'
        buttonText='Continue shopping'
      />
    );

  return (
    <Container className='p-3'>
      <Row>
        <Col>
          <CheckoutForm />
        </Col>
        <Col>
          <CartSummery total={calculatePrice(cart)} />
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutPage;
