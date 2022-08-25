import React, { useEffect } from 'react';
import Button from '../../../ui/Button';
import Textfield from '../../../ui/TextField';
import { useState } from 'react';
import { Address } from '../../../types/DBTypes';
import { Switch } from '../../../ui/Switch';
import { useStateValue } from '../../../providers/StateContext';
import { useRegister } from './useCheckout';

type Iprops = {
  title: string;
  onSave: () => void;
  displayNote: boolean;
};
export default function RegisterNewUser({ title, onSave }: Iprops) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [personalNumber, setPersonalNumber] = useState('');
  const [tel, setTel] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>();
  const [companyOrgNumber, setCompanyOrgNumber] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const [{ isCompany }] = useStateValue();

  const registerMutation = useRegister();

  const onSaveForm = () => {
    registerMutation.mutate(
      {
        name,
        email,
        password,
        confirmPassword,
        companyName,
        companyOrgNumber,
        country,
        city,
        street,
        postCode: postcode,
        tel,
        personalNumber: personalNumber,
        isCompany: false,
      },
      {
        onSuccess: () => {
          onSave();
        },
      }
    );
  };
  return (
    <div className='w-full'>
      <h1 className='text-xl text-center mt-2 mb-2 text-primary '>{title}</h1>
      <Textfield
        label='Name'
        name='name'
        placeholder='Your Name'
        required
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Textfield
        label='Personal number'
        name='personalNumber'
        placeholder='Your Personal number'
        required
        type='number'
        onChange={(e) => setPersonalNumber(e.target.value)}
        value={personalNumber}
      />
      <Textfield
        label='Email'
        name='email'
        placeholder='Your Email'
        required
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Textfield
        label='Telephone'
        name='tel'
        placeholder='Your Telephone'
        required
        type='tel'
        onChange={(e) => setTel(e.target.value)}
        value={tel}
      />
      <Textfield
        label='Password'
        name='password'
        placeholder='Your Password'
        required
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <Textfield
        label='Confirm password'
        name='confirmPassword'
        placeholder='Confirm password'
        required
        type='password'
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />

      {isCompany && isCompany === 'true' && (
        <>
          <Textfield
            label='Company name'
            name='companyName'
            placeholder='Your Company name'
            required
            type='text'
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
          />

          <Textfield
            label='Organization number'
            name='orgNumber'
            placeholder='Your Company name'
            required
            type='text'
            onChange={(e) => setCompanyOrgNumber(e.target.value)}
            value={companyOrgNumber}
          />
        </>
      )}

      <Textfield
        label='Country'
        name='Country_data'
        placeholder='Your Country'
        required
        type='text'
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
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
        <Button type='button' onClick={onSaveForm} size='large'>
          Save
        </Button>
      </div>
    </div>
  );
}
