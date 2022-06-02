import Image from 'next/image';
import React from 'react';
import { CartProduct, Product } from '../../../types/DBTypes';
import CountChanger from './CountChanger';
import { useSettings } from '../../../hooks/useSettings';
import { useStateValue } from '../../../providers/StateContext';
import { CHANGE_CART, REMOVE_FROM_CART } from '../../../providers/stateTypes';
import { FiX } from 'react-icons/fi';
import Price from '../../../components/shared/Price';

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

  const removeItem = () => {
    changeState({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  };

  return (
    <div className='flex items-center justify-between p-4 m-2 w-full border-b border-lightgreyx2 '>
      <div className='flex items-center'>
        <div className='flex items-center p-2 w-40 '>
          <img src={product.image} className='w-full h-auto' />
        </div>
        <div className='flex justify-between items-stretch flex-col h-full'>
          <h4 className='m-2'>{product.name}</h4>

          <span className='m-2'>
            <Price price={product.price} currency={currency} size='sm' />
          </span>
          <div className='m-2'>
            <CountChanger value={product.count} changeCount={changeCount} />
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={removeItem}
          className=' text-primary cursor-pointer w-12 '
        >
          <FiX />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
