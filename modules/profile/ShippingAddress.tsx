import React, { useEffect } from 'react';
import Button from '../../ui/Button';
import Textfield from '../../ui/TextField';
import { useState } from 'react';
import { useStateValue } from '../../providers/StateContext';
import { useAddresses, useSaveAddresses } from './api/useAddresses';
import { Address } from '../../types/DBTypes';

export default function ShippingAddress() {
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const { data, isLoading } = useAddresses();
  const saveAdress = useSaveAddresses();
  const onSvaeAdress = () => {
    saveAdress.mutate({
      id: undefined,
      name: undefined,
      address: undefined,
      country,
      city,
      street,
      postcode,
      note,
      isBilling: false,
    });
  };
  useEffect(() => {
    if (data && data.length > 0) {
      const address = data.find((c: Address) => c.isBilling === false);
      if (address) {
        setCountry(address?.country);
        setCity(address?.city);
        setStreet(address?.street);
        setPostcode(address?.postcode);
        setNote(address?.note);
      }
    }
  }, [data]);
  return (
    <div className='flex w-full justify-center items-center mt-4'>
      <div className='w-1/2'>
        <h1 className='text-xl'>Address</h1>
        <h2 className='text-lightgrey text-md '>
          Already have an account? Please,{' '}
          <link rel='stylesheet' href='/login.tsx' />{' '}
        </h2>

        <div className=''>
          <Textfield
            label='Country'
            name='Country_data'
            placeholder='Your Country'
            required
            type='text'
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />{' '}
        </div>
        <div className=''>
          <Textfield
            label='City'
            name='City_data'
            placeholder='Your City'
            required
            type='text'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className=''>
          <Textfield
            label='Street'
            name='Street_data'
            placeholder='Your Street'
            required
            type='text'
            onChange={(e) => setStreet(e.target.value.toString())}
            value={street}
          />
        </div>
        <div className=''>
          <Textfield
            label='Postcode'
            name='Postcode_data'
            placeholder='Your Postcode'
            required
            type='text'
            onChange={(e) => setPostcode(e.target.value)}
            value={postcode}
          />
        </div>
        <div className=''>
          <Textfield
            label='Note'
            name='Note_data'
            placeholder='Your Note'
            required
            type='text'
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
        </div>

        <div className='flex w-full justify-between items-center mt-4'>
          <Button type='button' onClick={onSvaeAdress} size='large'>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
