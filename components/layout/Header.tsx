import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram } from 'react-feather';
type Props = {};
const Header: React.FC<Props> = () => {
  return (
    <div className='fixed bg-white border-b w-full bg-gray px-2 py-2 flex justify-between items-center'>
      <div className=' w-1/4'>
        <Image src='/electroLogo.png' width={200} height={50} />
      </div>
      <div className='flex-1 flex justify-center items-center text-xl px-10  '>
        <Link href='/home'>
          <span className=' p-3 hover:text-blue-200 transition-all cursor-pointer'>
            Home
          </span>
        </Link>

        <Link href='/home'>
          <span className=' p-3 hover:text-blue-200 transition-all cursor-pointer'>
            Shop
          </span>
        </Link>

        <Link href='/home'>
          <span className=' p-3 hover:text-blue-200 transition-all cursor-pointer'>
            Sell
          </span>
        </Link>
        <Link href='/home'>
          <span className=' p-3 hover:text-blue-200 transition-all cursor-pointer'>
            Repair
          </span>
        </Link>
        <Link href='/home'>
          <span className=' p-3 hover:text-blue-200 transition-all cursor-pointer'>
            Contact us
          </span>
        </Link>
      </div>
      <div className='flex w-1/6 flex-row-reverse'>
        <Facebook size={30} className=' text-3xl' />
        <Instagram size={30} />
      </div>
    </div>
  );
};

export default Header;
