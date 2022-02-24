import React from 'react';
import { FiSearch } from 'react-icons/fi';
export default function SearchBar() {
  return (
    <div className='flex items-center ml-2 w-full'>
      <input
        placeholder='search...'
        className=' h-full py-2 px-2  bg-lightgreyx2 rounded-l-md w-full '
      />
      <span className='bg-primary w-12 h-full flex justify-center items-center text-white rounded-r-md cursor-pointer hover:bg-lightgreyx2 hover:text-primary transition-all '>
        <FiSearch size={25} />
      </span>
    </div>
  );
}
