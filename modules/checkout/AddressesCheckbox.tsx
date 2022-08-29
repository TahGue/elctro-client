import React, { useEffect, useState } from 'react';
import { Address } from '../../types/DBTypes';
import { useAddress, useSaveAddress } from './hooks/useAddresses';

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
import { FaCheckCircle } from 'react-icons/fa';

type IProps = {
  onSelect: (a: Address | null) => void;
  selectedAddress: Address | null;
};
function AddressesCheckbox({ onSelect, selectedAddress }: IProps) {
  const [{ user }, changeState] = useStateValue();
  const [{ cart }] = useStateValue();
  const saveAddress = useSaveAddress();
  const [displaySelect, setDisplaySelect] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

  if (selectedAddress !== null && displaySelect === false) {
    return (
      <div
        onClick={() => setDisplaySelect(!displaySelect)}
        className='flex justify-between items-center p-2 border border-green rounded-8 mt-3 cursor-pointer'
      >
        <div>{selectedAddress.street}</div>
        <div className='text-green'>
          <FaCheckCircle />
        </div>
      </div>
    );
  }
  return (
    <div className='border-primary border rounded-8 p-6 mt-2'>
      {user && (
        <ExistedAddresses
          onSelect={(ad) => {
            setDisplaySelect(false);
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
        className='flex flex-row items-center cursor-pointer'
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
          onSave={saveAddress.mutate}
          title='Shipping address'
          isBilling={false}
        />
      )}
    </div>
  );
}

export default AddressesCheckbox;
