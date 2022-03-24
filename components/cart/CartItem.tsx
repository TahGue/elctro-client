import Image from 'next/image';
import React from 'react';
import { CartProduct, Product } from '../../types/DBTypes';

type IProps = {
  product: CartProduct;
};
function CartItem({ product }: IProps) {
  return (
    <div className='flex justify-between items-center p-2 m-2 w-full'>
      <div className='flex items-center p-2 flex-1'>
        <Image src={product.image} layout='fixed' width={100} height={100} />
        <span className=' text-black'>{product.name}</span>
      </div>
      <div>
        <span>{product.count}</span>
        <span>{product.price}</span>
      </div>
    </div>
  );
}

export default CartItem;
