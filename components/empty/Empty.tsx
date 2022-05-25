import React from 'react';
import Image from 'next/image';
import Button from '../../ui/Button';
import Link from 'next/link';

function Empty({
  title = 'Oops, Sorry!',
  subTitle = 'The Page you are looking for is currently unavailable or try tousing other keywords',
  buttonText = 'Go to home',
  buttonLink = '/',
}) {
  return (
    <div className='  flex  justify-center items-center'>
      <div className='flex flex-col  justify-between items-center '>
        <Image
          className=' '
          src={'/404.png'}
          layout='fixed'
          width={190}
          height={190}
          alt='404'
        />

        <div className='m-7 text-4xl'>
          <h1> {title}</h1>
        </div>

        <div className=' m-2'>
          <h3>{subTitle}</h3>
        </div>
        <div className='m-4 '>
          <Link href={buttonLink}>
            <Button size='large'>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Empty;
