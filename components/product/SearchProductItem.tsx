import Image from 'next/image';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { useSettings } from '../../hooks/useSettings';
import { Product as ProductType } from '../../types/DBTypes';
import Button from '../../ui/Button';

type IProps = {
  product: ProductType;
};

const SearchProductItem = ({ product }: IProps) => {
  const { currency } = useSettings();

  return (
    <div className='flex justify-between items-center  mt-2'>
      <div className='flex'>
        <div className='rounded-l-md'>
          <Image src={product?.image} layout='fixed' width={376} height={243} />
        </div>
        <div className='flex flex-col justify-around p-1'>
          <div className='mt-1 text-xl '>
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
      <div className=' w-40  h-30 flex flex-col justify-between items-end pt-20'>
        <div className='line-through text-sm text-grey mt-1'>{`200 ${currency}`}</div>
        <div>{`${product.price} ${currency}`}</div>
        <div className='  flex text-primary  mt-14'>
          <AiFillHeart />
          <span className='text-xs  '>Add to Wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default SearchProductItem;
