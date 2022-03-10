import React from 'react';
import ContactUs from '../components/ContactUs';
import ContactUsForm from '../components/ContactUsForm';

function contactus() {
  return (
    <div className=''><h1 className=' text-3xl font-bold p-6 '> Kontakta Oss </h1>
       
    <h4 className='text-lightgrey max-w-2xl p-6'>Learn more about our products and services to get a better experience in shopping at our website. Please complete this form to get the latest information from us. Our Customer Service is available on 24/7. The information you provide will be confidential and not shared with third parties.</h4>
    
    <div className='flex'>
       
       
      <div className='flex-auto max-w-2xl p-5'>
        <ContactUsForm />
      </div>
      <div className='  p-5'>
        <ContactUs />
      </div>
    </div>
    </div>
  );
}

export default contactus;