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
import { RiMastercardLine, RiPaypalLine, RiVisaFill } from 'react-icons/ri';

import { useSettings } from '../../hooks/useSettings';
import BoxedIcon from '../../ui/BoxedIcon';

import CategoriesMenu from '../categoriesMenu/CategoriesMenu';
import MenuLinks from '../menuLinks/MenuLinks';
import PaymentIcons from '../../ui/PaymentIcons';
import SubscribeForm from '../subscribe';
import { Col, Container, Row } from 'react-grid-system';

export default function Footer() {
  const { companyName, companyEmail, companyTel } = useSettings();
  return (
    <div className='bg-lightprimary  p-5 '>
      <Container>
        <Row>
          <Col lg={6} md={4} sm={12}>
            <div className=''>
              <h1 className='text-primary text-3xl'>Electromobile </h1>
              <h4 className=' text-grey w-full max-w-md'>
                Professionella Tekniker Det är väldigt viktigt för oss att din
                process sker professionellt. Från att du lämnar in din telefon
                till att du får tillbaka den.Det är precis det våra tekniker
                gör.
              </h4>
              <div className='flex   py-4 '>
                <ul className='text-primary justify-around flex items-center mt-2'>
                  <BoxedIcon>
                    <FaInstagram size={22} />
                  </BoxedIcon>
                  <BoxedIcon>
                    <FaFacebookSquare size={22} />
                  </BoxedIcon>
                  <BoxedIcon>
                    <FaTwitter size={22} />
                  </BoxedIcon>
                  <BoxedIcon>
                    <FaTiktok size={22} />
                  </BoxedIcon>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div>
              <h4 className=' text-lg font-bold text-black'>Electromobil</h4>
              <MenuLinks containerClassName='flex flex-col' />
            </div>
          </Col>

          <Col lg={3} md={4} sm={12}>
            <div className='flex flex-col'>
              <h4 className=' text-lg font-bold text-black items-center'>
                Kontakta Oss
              </h4>
              <div>
                <a className=' inline-block' href={`tel:${companyTel}`}>
                  <div className='flex items-center'>
                    <span className='text-primary mx-4'>
                      <FiPhone size={20} />
                    </span>
                    <span className='text-black'>{companyTel}</span>
                  </div>
                </a>
                <a className=' inline-block' href={`mailto:${companyEmail}`}>
                  <div className='flex items-center cursor-pointer'>
                    <span className='text-primary mx-4'>
                      <GoMail size={20} />
                    </span>
                    <span className='text-black'>{companyEmail}</span>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className='flex items-center justify-between border-t border-x-lightgrey '>
        <h5 className=''>copyright © 2022 ElectroMobil. All Right Reserved</h5>
        <div className=' justify-end  '>
          <ul className='text-primary justify-end flex items-center '>
            <PaymentIcons>
              <RiMastercardLine size={22} />
            </PaymentIcons>
            <PaymentIcons>
              <RiVisaFill size={22} />
            </PaymentIcons>
            <PaymentIcons>
              <RiPaypalLine size={22} />
            </PaymentIcons>
          </ul>
        </div>
      </div>
    </div>
  );
}
