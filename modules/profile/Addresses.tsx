import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import BillingAddress from './BillingAddress';
import ShippingAddress from './AddressForm';
import { useSaveAddresses, useAddresses } from './api/useAddresses';
import { useEffect } from 'react';

import { Address } from '../../types/DBTypes';
import AddressForm from './AddressForm';
function Addresses() {
  const { data, isLoading } = useAddresses();
  const saveAdress = useSaveAddresses();

  return (
    <div className='p-8'>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <AddressForm
              isBilling={false}
              onSave={saveAdress.mutate}
              address={data?.find((c: Address) => c.isBilling === false)}
              title='Shipping address'
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <AddressForm
              isBilling={true}
              onSave={saveAdress.mutate}
              address={data?.find((c: Address) => c.isBilling === true)}
              title='Billing address'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Addresses;
