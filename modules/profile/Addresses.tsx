import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress'

function Addresses() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <h3>Shipping Adress</h3>
            <ShippingAddress />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <h3>Billing Adress</h3>
            <BillingAddress />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Addresses