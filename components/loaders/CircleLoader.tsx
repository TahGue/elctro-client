import React from 'react';
import { PuffLoader } from 'react-spinners';

function CircleLoader({ fullScreen = false }) {
  return (
    <div
      className={` ${
        fullScreen ? 'h-screen' : 'h-full'
      } h-full flex justify-center items-center `}
    >
      <div className='flex flex-col justify-center items-center w-full h-full min-h-48 text-primary'>
        <div className='flex items-center justify-center space-x-2 animate-bounce'>
          <div
            className='spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-white rounded-full'
            role='status'
          ></div>
        </div>
        <div className=' animate-ping '>loading ...</div>
      </div>
    </div>
  );
}

export default CircleLoader;
