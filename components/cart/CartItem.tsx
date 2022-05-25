import Image from 'next/image';
import React from 'react';
import { CartProduct, Product } from '../../types/DBTypes';
import CountChanger from './CountChanger';
import { useSettings } from './../../hooks/useSettings';
import { useStateValue } from '../../providers/StateContext';
import { CHANGE_CART } from '../../providers/stateTypes';
import { X } from 'react-feather';
import Button from '../../ui/Button';

type IProps = {
  product: CartProduct;
};
function CartItem({ product }: IProps) {
  const { currency } = useSettings();
  const [{}, changeState] = useStateValue();
  const changeCount = (val: number) => {
    if (val > 0) {
      changeState({
        type: CHANGE_CART,
        payload: { ...product, count: val },
      });
    }
  };

  return (
    <div className='flex items-center p-4 m-2 w-full'>
      <div className='flex items-center p-4 m-2 w-full'>
        <div className='flex items-center p-2 w-40 '>
          <img src={product.image} className='w-full h-auto' />
        </div>
        <div className='flex justify-between flex-col h-full'>
          <h4>{product.name}</h4>
          <span>{`${product.price} ${currency}`}</span>
          <CountChanger value={product.count} changeCount={changeCount} />
        </div>
      </div>
      <div>
        <Button>
          <X />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
