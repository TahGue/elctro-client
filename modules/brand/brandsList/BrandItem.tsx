import React from 'react';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';
import { Brand } from '../../types/DBTypes';
import Image from 'next/image';

type IProps = {
  brand: Brand;
  onSelect: (brand: Brand) => void;
  selected: boolean;
};
export default function BrandItem({ selected, onSelect, brand }: IProps) {
  return (
    <div
      onClick={() => onSelect(brand)}
      className='flex items-center justify-between p-2 cursor-pointer bg-white hover:bg-lightgreyx2 rounded-5 transition-all hover:font-bold'
    >
      <div className='flex items-center justify-start'>
        <div className='pr-2'>
          <Image
            src={`${brand?.image}`}
            layout='fixed'
            width={30}
            height={30}
            alt={brand?.name}
            className='rounded-full'
          />
        </div>

        <span>{brand.name}</span>
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
