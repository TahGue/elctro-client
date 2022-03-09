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

import { useSettings } from '../../hooks/useSettings';
import BoxedIcon from '../../ui/BoxedIcon';

import CategoriesMenu from '../categoriesMenu/CategoriesMenu';
import MenuLinks from '../menuLinks/MenuLinks';
import SubscribeForm from '../subscribe';

export default function Footer() {
  const { companyName, companyEmail, companyTel } = useSettings();
  return (
   
   <div className='bg-lightprimary  p-5 flex justify-between'>
     
      <div>
        <h1 className='text-primary text-3xl'>Electromobile </h1>
        <h4 className=' text-grey w-full max-w-md'>
          Professionella Tekniker Det är väldigt viktigt för oss att din process
          sker professionellt. Från att du lämnar in din telefon till att du får
          tillbaka den.Det är precis det våra tekniker gör.
        </h4>
        <div className='flex border-b border-lightgreyx2 py-4 '>
          <ul className='text-primary justify-around flex items-center mt-2'>
            <BoxedIcon>
              <FaInstagram size={33} />
            </BoxedIcon>
            <BoxedIcon>
              <FaFacebookSquare size={33} />
            </BoxedIcon>
            <BoxedIcon>
              <FaTwitter size={33} />
            </BoxedIcon>
            <BoxedIcon>
              <FaTiktok size={33} />
            </BoxedIcon>
          </ul>
        </div>
      </div>
      <div>
        <h4 className=' text-lg font-bold text-black'>Electromobil</h4>
        <MenuLinks containerClassName='flex flex-col' />
      </div>
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

      <div></div>
    </div>
  );
}
