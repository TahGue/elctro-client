import React from 'react';
import ContactUs from './ContactUs';
import ContactUsForm from './ContactUsForm';

function ContactPage() {
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

export default ContactPage;
