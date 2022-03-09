import Link from 'next/link';
import React from 'react';
import { MdOutlineShoppingBag, MdOutlineEmail } from 'react-icons/md';
import { RiShoppingBagLine } from 'react-icons/ri';
export default function AuthHeader() {
  return (
    <div className='h-full flex items-center flex-1 w-full justify-between'>
      <span className='relative cursor-pointer'>
        <RiShoppingBagLine size={30} />
        <span className=' absolute w-6 h-6  -top-4 -right-3 rounded-full text-xs flex justify-center items-center  bg-primary text-white '>
          10
        </span>
      </span>

      <span className='relative cursor-pointer'>
        <MdOutlineEmail size={30} />
        <span className=' absolute w-6 h-6  -top-4 -right-3 rounded-full text-xs flex justify-center items-center  bg-primary text-white '>
          10
        </span>
      </span>

      <Link href='/signin'>
        <span className='decoration-1 underline text-primary cursor-pointer'>
          SignIn
        </span>
      </Link>

      <Link href='/signup'>
        <span className='bg-primary text-white cursor-pointer p-2 rounded-md '>
          Signup
        </span>
      </Link>
    </div>
  );
}
