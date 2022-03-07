import Image from 'next/image';
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { useSettings } from '../../hooks/useSettings';
import { Product as ProductType } from '../../types/DBTypes';
import Button from '../../ui/Button';

type IProps = {
  product: ProductType;
};

const ProductCard2 = ({ product }: IProps) => {
  const { currency } = useSettings();

  return (
    <div className='  flex justify-between items-center  mt-2' >
      <div className='flex items-center'>
    <div className='rounded-l-md'>
      <Image src={product?.image} layout='fixed' width={376} height={243} />
    </div>
    <div>
    <div className='mt-1 text-xl'>
      <p>{product.name}</p>
     
    </div>
    <div className='mt-5'>
      <p>{product.description}</p>
     
    </div>
    <div className='mt-3'>
      <Button onClick={() => {}}>Add to cart</Button>
    </div>
  </div>
  </div>
  <div className='w-24' >
    <span>{`${product.price} ${currency}`}</span>
    <div className='mt-3
  ' >
      <span >
        <FiHeart />
      </span>
    </div>
    </div>
  </div>
  );
};

export default ProductCard2;
