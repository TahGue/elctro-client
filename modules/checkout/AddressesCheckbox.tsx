import React, { useState } from 'react';
import { Address } from '../../types/DBTypes';
import { useAddress } from './useAddresses';

import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import AddressModel from '../profile/AdressModel';
import { useStateValue } from '../../providers/StateContext';
import CircleLoader from '../../components/loaders/CircleLoader';
import ShippingAddress from '../profile/AddressForm';
import { Col, Container, Row } from 'react-grid-system';
import CartSummery from '../cart/cart/CartSummery';
import { calculatePrice } from '../../helpers/helper';
import ExistedAddresses from './ExistedAddresses';
import AddressForm from '../profile/AddressForm';

type IProps = {
  onSelect: (a: Address | null) => void;
  selectedAddress: Address | null;
  onGoNext: () => void;
};
function AddressesCheckbox({ onSelect, selectedAddress, onGoNext }: IProps) {
  const [{ user }, changeState] = useStateValue();
  const [{ cart }] = useStateValue();

  const [displayForm, setDisplayForm] = useState(false);

  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className='border-primary border rounded-8 p-6'>
            {user && (
              <ExistedAddresses
                onSelect={(ad) => {
                  onSelect(ad);
                  setDisplayForm(false);
                }}
                selected={selectedAddress}
              />
            )}
            <div
              onClick={() => {
                onSelect(null);
                setDisplayForm(true);
              }}
              className='flex flex-row items-center'
            >
              {selectedAddress === null ? (
                <BsCheckCircle className='text-green-500' />
              ) : (
                <BsCircle className='text-primary-500 ' />
              )}
              <span>Add new address</span>
            </div>

            {(displayForm || selectedAddress === null) && (
              <AddressForm
                address={undefined}
                onSave={() => {}}
                title='Shipping address'
                isBilling={false}
              />
            )}
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <CartSummery onCheckout={onGoNext} total={calculatePrice(cart)} />
        </Col>
      </Row>
    </Container>
  );
}

export default AddressesCheckbox;
