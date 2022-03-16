import React from 'react';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';
import { Category } from '../../types/DBTypes';
import Image from 'next/image';

type IProps = {
  category: Category;
  onSelect: (category: Category) => void;
  selected: boolean;
};
export default function CategoryItem({ selected, onSelect, category }: IProps) {
  return (
    <div
      onClick={() => onSelect(category)}
      className='flex items-center justify-between p-2 cursor-pointer bg-white hover:bg-lightgreyx2 rounded-5 transition-all hover:font-bold'
    >
      <div className='flex items-center justify-start'>
        <div className='pr-2'>
          <Image
            src={`${category?.image}`}
            layout='fixed'
            width={30}
            height={30}
            alt={category?.name}
            className='rounded-full'
          />
        </div>

        <span>{category.name}</span>
      </div>

      <div className='p-2'>
        {selected ? (
          <FiCheckCircle size={20} color='green' />
        ) : (
          <FiCircle size={20} />
        )}
      </div>
    </div>
  );
}
