import React, { useState } from 'react';
import BoxedIcon from '../ui/BoxedIcon';
import Button from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import Textfield from '../ui/TextField';

const ContactUsForm = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [streetnr, setStreetNr] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipCode] = useState('');
  // TODO

  return (
    <div className='border border-grey rounded-md p-3'>
      <form>
        <div>
          <Textfield
            label='firstname'
            name='fields[first_name]'
            placeholder='Your first name'
            type='text'
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
        </div>
        <div>
          <Textfield
            label='Lastname'
            name='fields[last_name]'
            placeholder='Your last name'
            type='text'
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
        </div>
        <div>
          <Textfield
            label='Street'
            name='street'
            placeholder='Your street name'
            required
            type='text'
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />
        </div>
        <div>
          <Textfield
            label='StreetNr'
            name='streetnr'
            placeholder='Your street number'
            required
            type='text'
            onChange={(e) => setStreetNr(e.target.value)}
            value={streetnr}
          />
        </div>
        <div className=''>
          <Textfield
            label='Contry'
            name='country'
            placeholder='Your country name'
            required
            type='text'
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </div>
        <div className=''>
          <Textfield
            label='City'
            name='city'
            placeholder='Your city name'
            required
            type='text'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className=''>
          <Textfield
            label='ZipCode'
            name='zipcode'
            placeholder='Your zipcode'
            required
            type='text'
            onChange={(e) => setZipCode(e.target.value)}
            value={zipcode}
          />
        </div>
        
          <div>
            <Button size='large'>Submit</Button>
          </div>
       
      </form>
    </div>
  );
};
export default ContactUsForm;