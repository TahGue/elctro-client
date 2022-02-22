import React from 'react';
import { BiCategory } from 'react-icons/bi';

export default function CategoriesMenu() {
  return (
    <div>
      <span
        className={`
      flex justify-center items-center
      w-12 h-12 bg-lightgreyx2  text-grey rounded-lg
      cursor-pointer
      hover:bg-primary   
      hover:text-white
        `}
      >
        <BiCategory size={22} />
      </span>
    </div>
  );
}
