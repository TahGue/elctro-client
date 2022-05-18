import React from 'react';
import Image from 'next/image';
import Button from '../../ui/Button';
import Link from 'next/link';

function Empty() {
  return (
    <div className='  flex  justify-center items-center h-screen'>
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
          <h1> Oops, Sorry!</h1>
        </div>

        <div className=' m-2'>
          <h3>
            The Page you are looking for is currently unavailable or try to
            using other keywords
          </h3>
        </div>
        <div className='m-4 '>
          <Link href='/'>
            <Button size='large'>Back To Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Empty;
