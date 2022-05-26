import React from 'react';
import { FiSearch } from 'react-icons/fi';

type IProps = {
  placeholder?: string;
  value: string;
  onChange: (a: any) => void;
  autoFocus?: boolean;
};

export default function SearchBar({
  placeholder = 'Search...',
  value,
  onChange,
  autoFocus,
}: IProps) {
  return (
    <div className='flex items-center ml-2 w-full'>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=' h-full py-2 px-2  bg-lightgreyx2 rounded-l-md w-full '
        autoFocus={autoFocus}
      />
      <span className='bg-primary w-12 h-full flex justify-center items-center text-white rounded-r-md cursor-pointer hover:bg-lightgreyx2 hover:text-primary transition-all '>
        <FiSearch size={25} />
      </span>
    </div>
  );
}
