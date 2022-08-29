import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useStateValue } from '../../providers/StateContext';
import Cart from '../../shared/cart/Cart';
import styles from './checkout.module.css';
import PaymentSection from './payment/PaymentSection';
import ShippingSection from './shippingAddress/ShippingSection';
import SuccessPage from './successPage/SuccessPage';
import UserInfo from './userInfo/UserInfo';
import { useCart, useCheckCart } from '../../hooks/useCart';
import LoadingPage from '../../shared/loading/LoadingPage';
import NoProducts from './noProducts/NoProducts';
import CartError from './cartError/CartError';

function CheckoutPage() {
  const [{ user }] = useStateValue();
  const [shippingMethod, setShippingMethod] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [success, setSuccess] = useState(false);
  const { data: cart, isLoading } = useCart();
  const { data: cartErrors, isLoading: isLoadingErrors } = useCheckCart(
    cart?.id
  );
  if (success) {
    return <SuccessPage />;
  }
  if (isLoading || isLoadingErrors) {
    return <LoadingPage />;
  }

  if (!cart || cart?.products?.length <= 0) {
    return <NoProducts />;
  }

  if (cartErrors && cartErrors.length > 0) {
    return <CartError errors={cartErrors} />;
  }
  return (
    <Container>
      <Row>
        <Col lg={8} md={10} sm={12}>
          <UserInfo />
          <ShippingSection
            isSuccess={selectedAddress !== null}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            setShippingMethod={setShippingMethod}
          />
          <PaymentSection
            isCurrent={
              selectedAddress !== null && user && shippingMethod !== null
            }
            address={selectedAddress}
            onDone={() => setSuccess(true)}
          />
        </Col>
        <Col lg={4} md={2} sm={12}>
          <div className={styles.cartContainer}>
            <Cart displayOnly={true} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutPage;
