import React from 'react'
import ContactUs from '../components/ContactUs'
import ContactUsForm from '../components/ContactUsForm'

function contactus() {
  return (
    <div className='flex flex-col'>
        <div>contactus</div>
    <br />
        <ContactUsForm/>
    <ContactUs />
    
    </div>
  )
}

export default contactus