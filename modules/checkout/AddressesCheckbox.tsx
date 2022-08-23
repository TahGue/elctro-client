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

type IProps = {
  onSelect: (a: Address | null) => void;
  selectedAddress: Address | null;
  onGoNext: () => void;
};
function AddressesCheckbox({ onSelect, selectedAddress, onGoNext }: IProps) {
  const [{ user }, changeState] = useStateValue();
  const [{ cart }] = useStateValue();
  const { data, isLoading } = useAddress();
  const [displayForm, setDisplayForm] = useState(false);

  if (isLoading) return <CircleLoader />;
  const onSelectAddress = (address: Address) => {
    onSelect(address);
    setDisplayForm(false);
  };
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          {data?.map((address: Address) => (
            <div
              onClick={() => onSelectAddress(address)}
              className='flex flex-row items-center'
              key={address.id}
            >
              {selectedAddress?.id === address.id ? (
                <BsCheckCircle className='text-green-500' />
              ) : (
                <BsCircle className='text-grey-500' />
              )}
              <span>{address.street}</span>
              <span>{address.postcode}</span>
            </div>
          ))}
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
              <BsCircle className='text-grey-500' />
            )}
            <span>Add new</span>
          </div>

          {displayForm && <ShippingAddress />}
        </Col>
        <Col lg={6} md={6} sm={12}>
          <CartSummery onCheckout={onGoNext} total={calculatePrice(cart)} />
        </Col>
      </Row>
    </Container>
  );
}

export default AddressesCheckbox;
