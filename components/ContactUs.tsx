import React from 'react';
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
} from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';

import { useSettings } from '../hooks/useSettings';

export default function ContactUs() {
  const { companyName, companyEmail, companyTel } = useSettings();
  return (
    
     <div className='border border-grey rounded-md p-3'>
      <div className='flex flex-col'>
        <h4 className=' text-lg font-bold text-black items-center'>Kontakta Oss</h4>
        <a href={`tel:${companyTel}`}>
          <div className='flex items-center'>
            <span className='text-primary mx-4'>
              <FiPhone size={20} />
            </span>
            <span className='text-black'>{companyTel}</span>
          </div>
        </a>
        <a href={`mailto:${companyEmail}`}>
          <div className='flex items-center cursor-pointer'>
            <span className='text-primary mx-4'>
              <GoMail size={20} />
            </span>
            <span className='text-black'>{companyEmail}</span>
          </div>
        </a>
      </div>
    </div>
  );
}
