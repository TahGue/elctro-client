import React from 'react';
import Empty from '../../components/empty/Empty';
import { useStateValue } from '../../providers/StateContext';
import { Container, Row, Col } from 'react-grid-system';
import { calculatePrice } from '../../helpers/helper';
import CartSummery from '../cart/cart/CartSummery';
import { CheckoutForm } from './CheckoutForm';
import Cart from '../cart/cart/Cart';

type Iprops = {
  onGoNext: () => void;
};
function ReviewCart({ onGoNext }: Iprops) {
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
          <Cart />
        </Col>
        <Col>
          <CartSummery total={calculatePrice(cart)} onCheckout={onGoNext} />
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewCart;
