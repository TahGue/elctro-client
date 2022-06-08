import React, { useState } from 'react';
import { Address } from '../../types/DBTypes';
import { useAddress } from './useAddresses';

import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import AddressModel from '../profile/AdressModel';
import { useStateValue } from '../../providers/StateContext';
import CircleLoader from '../../components/loaders/CircleLoader';

type IProps = {
  onSelect: (a: Address) => void;
  selectedAddress: Address | null;
};
function AddressesCheckbox({ onSelect, selectedAddress }: IProps) {
  const [{ user }, changeState] = useStateValue();
  const { data, isLoading } = useAddress();

  if (isLoading) return <CircleLoader />;
  return (
    <div>
      {data?.map((address: Address) => (
        <div
          onClick={() => onSelect(address)}
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
        onClick={() =>
          changeState({ type: 'DISPLAY_FORM', payload: 'Address' })
        }
        className='flex flex-row items-center'
      >
        {selectedAddress === null ? (
          <BsCheckCircle className='text-green-500' />
        ) : (
          <BsCircle className='text-grey-500' />
        )}
        <span>Add new</span>
      </div>

      <AddressModel />
    </div>
  );
}

export default AddressesCheckbox;
