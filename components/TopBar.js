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

export default function TopBar() {
  const { companyName, companyEmail, companyTel } = useSettings();
  return (
    <div className='flex justify-between items-center border-b border-lightgreyx2 py-4 '>
      <div className='text-lightgrey justify-between flex items-center w-40'>
        <span className='hover:text-primary transition cursor-pointer'>
          <FaInstagram size={20} />
        </span>
        <span className='hover:text-primary transition cursor-pointer'>
          <FaFacebookSquare size={20} />
        </span>
        <span className='hover:text-primary transition cursor-pointer'>
          <FaTwitter size={20} />
        </span>
        <span className='hover:text-primary transition cursor-pointer'>
          <FaTiktok size={20} />
        </span>
      </div>
      <div className='flex'>
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
