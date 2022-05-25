import React from 'react';
import { useStateValue } from '../../providers/StateContext';

import { CartProduct, Product } from '../../types/DBTypes';
import { ClickAway } from '../../ui/ClickAway';
import CartItem from './CartItem';

type IProps = {
  onClose: () => void;
  open: boolean;
};
const CartDrawer = ({ open = false, onClose }: IProps) => {
  const [{ cart }, changeState] = useStateValue();

  return (
    <div className='fixed top-0 left-0 z-30 w-screen h-screen bg-transparentGray flex justify-end'>
      <ClickAway onClickAway={onClose} className=' bg-white w-1/3 h-screen'>
        <div className=' bg-white w-full h-screen animate-fade-in-up'>
          {cart.map((product: CartProduct) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      </ClickAway>
    </div>
  );
};

export default CartDrawer;
