import React from 'react';
import ContactUs from '../components/ContactUs';
import ContactUsForm from '../components/ContactUsForm';

function contactus() {
  return (
    <div className='flex'>
      <div className='flex-1 p-5'>
        <ContactUsForm />
      </div>
      <div className=' p-5'>
        <ContactUs />
      </div>
    </div>
  );
}

export default contactus;
