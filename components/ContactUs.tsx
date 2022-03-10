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
import FollowUs from './FollowUs';

export default function ContactUs() {
  const { companyName, companyEmail, companyTel } = useSettings();
  return (
    <div className='border border-grey rounded-lg p-3 h-full text-white bg-primary'>
      <div >
        <h4 className=' text-lg font-bold  items-center'>
          Kontakta Oss
        </h4>
        <a className='text-white' href={`tel:${companyTel}`}>
          <div className=' '>
            <span className='text-primary '>
              <FiPhone size={20} />
            </span>
            <span className=''>{companyTel}</span>
          </div>
        </a>
        <a href={`mailto:${companyEmail}`}>
          <div className=' cursor-pointer'>
            <span className='text-primary '>
              <GoMail size={20} />
            </span>
            <span className=''>{companyEmail}</span>
          </div>
        </a>
      </div>
      <div>
          <h4 className='  font-bold'>FollowUs</h4>
          <FollowUs />
      </div>
    </div>
  );
}
