import React from 'react';
import Image from 'next/image';

export default function CategoriesList({ categories }) {
  return (
    <div>
      <list className='list-none  '>
        {categories.map((category) => (
          <li
            key={category.id}
            className='flex items-center mt-1 cursor-pointer hover:bg-lightgreyx2 p-3 '
          >
            <img src={category?.image} width={25} height={25} alt='' />
            <span>{category.name}</span>
          </li>
        ))}
      </list>
    </div>
  );
}
