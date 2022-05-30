import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Cart from './cart/Cart';
import CartSummery from './cart/CartSummery';
import Empty from '../../components/empty/Empty';
import { calculatePrice } from '../../helpers/helper';
import { useStateValue } from '../../providers/StateContext';

function CartPage() {
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
          <CartSummery total={calculatePrice(cart)} />
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
