import React from 'react';
import Empty from '../../components/empty/Empty';
import { useStateValue } from '../../providers/StateContext';
import { Container, Row, Col } from 'react-grid-system';
import { calculatePrice } from '../../helpers/helper';
import CartSummery from '../cart/cart/CartSummery';
import { CheckoutForm } from './CheckoutForm';
import Cart from '../cart/cart/Cart';
import { useRouter } from 'next/router';

type Iprops = {
  onGoNext: () => void;
};
function ReviewCart({ onGoNext }: Iprops) {
  const [{ cart }] = useStateValue();
  const router = useRouter();

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
        <Col lg={8} md={6} sm={12}>
          <div className=' border border-primary rounded-8 p-2 '>
            <Cart />
          </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CartSummery
            total={calculatePrice(cart)}
            onCheckout={onGoNext}
            onShopping={() => router.push('/shop')}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewCart;
