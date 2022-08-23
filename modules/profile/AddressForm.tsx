import React, { useEffect } from 'react';
import Button from '../../ui/Button';
import Textfield from '../../ui/TextField';
import { useState } from 'react';
import { useStateValue } from '../../providers/StateContext';
import { useAddresses, useSaveAddresses } from './api/useAddresses';
import { Address } from '../../types/DBTypes';

type Iprops = {
  title: string;
  onSave: (a: Address) => void;
  address: Address | undefined;
  isBilling: boolean;
};
export default function AddressForm({
  title,
  onSave,
  address,
  isBilling,
}: Iprops) {
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const onSaveAddress = () => {
    onSave({
      id: undefined,
      name: undefined,
      address: undefined,
      country,
      city,
      street,
      postcode,
      note,
      isBilling: isBilling,
    });
  };
  useEffect(() => {
    if (address) {
      if (address) {
        setCountry(address?.country);
        setCity(address?.city);
        setStreet(address?.street);
        setPostcode(address?.postcode);
        setNote(address?.note);
      }
    }
  }, [address]);
  return (
    <div className='w-full'>
      <h1 className='text-xl text-center mt-2 mb-2 text-primary '>{title}</h1>
      <Textfield
        label='Country'
        name='Country_data'
        placeholder='Your Country'
        required
        type='text'
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />{' '}
      <Textfield
        label='City'
        name='City_data'
        placeholder='Your City'
        required
        type='text'
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <Textfield
        label='Street'
        name='Street_data'
        placeholder='Your Street'
        required
        type='text'
        onChange={(e) => setStreet(e.target.value.toString())}
        value={street}
      />
      <Textfield
        label='Postcode'
        name='Postcode_data'
        placeholder='Your Postcode'
        required
        type='text'
        onChange={(e) => setPostcode(e.target.value)}
        value={postcode}
      />
      <Textfield
        label='Note'
        name='Note_data'
        placeholder='Your Note'
        required
        type='text'
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
      <div className='flex w-full justify-between items-center mt-4'>
        <Button type='button' onClick={onSaveAddress} size='large'>
          Save
        </Button>
      </div>
    </div>
  );
}
