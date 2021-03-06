import Link from 'next/link';
import React from 'react';
import { useTypeSafeTranslation } from '../../hooks/useTypeSafeTranslation';

export default function MenuLinks({
  containerClassName = 'flex justify-center',
}) {
  const { t } = useTypeSafeTranslation();
  return (
    <div>
      <div className={` text-lg ${containerClassName}`}>
        <Link href='/'>
          <span className=' p-2 m-2 text-black cursor-pointer hover:text-primary transition-all'>
            {t('home')}
          </span>
        </Link>
        <Link href='/sell'>
          <span className='p-2 m-2 text-black cursor-pointer hover:text-primary transition-all'>
            Sell
          </span>
        </Link>
        <Link href='/shop'>
          <span className='p-2 m-2 text-black cursor-pointer hover:text-primary transition-all'>
            Shop
          </span>
        </Link>
        <Link href='/repair'>
          <span className='p-2 m-2 text-black cursor-pointer hover:text-primary transition-all'>
            Repair
          </span>
        </Link>
        <Link href='contactus'>
          <span className='p-2 m-2 text-black cursor-pointer hover:text-primary transition-all'>
            Contact us
          </span>
        </Link>
      </div>
    </div>
  );
}
