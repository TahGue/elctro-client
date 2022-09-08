import React from 'react';
import Image from 'next/image';
import { Category } from '../../../types/DBTypes';

type IProps = {
  categories: Category[] | undefined;
};
export default function CategoriesList({ categories }: IProps) {
  return (
    <div>
      <div className='list-none overflow-auto  '>
        {categories?.map((category) => (
          <li
            key={category.id}
            className='flex items-center mt-1 cursor-pointer hover:bg-lightgreyx2 p-3 '
          >
            <Image
              src={
                category.image &&
                category.image !== '' &&
                category.image !== null
                  ? category.image
                  : '/electroLogo.png'
              }
              layout='fixed'
              width={25}
              height={25}
              alt='cat'
            />
            <span>{category.name}</span>
          </li>
        ))}
      </div>
    </div>
  );
}
