import React from 'react'
import {FaFacebookSquare, FaTwitter, FaInstagram, FaTiktok} from 'react-icons/fa';
import BoxedIcon from '../ui/BoxedIcon';

function FollowUs() {
  return (
    <div className='flex border-b border-lightgreyx2 py-4  '>
          <ul className='text-primary  flex items-center mt-2'>
            <BoxedIcon>
              <FaInstagram size={20} />
            </BoxedIcon>
            <BoxedIcon>
              <FaFacebookSquare size={20} />
            </BoxedIcon>
            <BoxedIcon>
              <FaTwitter size={20} />
            </BoxedIcon>
            <BoxedIcon>
              <FaTiktok size={20} />
            </BoxedIcon>
          </ul>
        </div>
  )
}

export default FollowUs