import { useRouter } from 'next/router';
import React from 'react';
import { calculatePrice } from '../../../helpers/helper';
import { useStateValue } from '../../../providers/StateContext';

import { ClickAway } from '../../../ui/ClickAway';
import Cart from './Cart';
import CartSummery from './CartSummery';

type IProps = {
  onClose: () => void;
  open: boolean;
};
const CartDrawer = ({ open = false, onClose }: IProps) => {
  const [{ cart }, changeState] = useStateValue();

  const router = useRouter();

  return (
    <div className='fixed top-0 left-0 z-30 w-screen h-screen overflow-auto bg-transparentGray flex justify-end'>
      <ClickAway onClickAway={onClose} className=' bg-white w-1/3 h-screen'>
        <div className=' bg-white w-full animate-fade-in-up'>
          <Cart />
          <div className='p-6'>
            <CartSummery
              total={calculatePrice(cart)}
              onShopping={onClose}
              onCheckout={() => {
                router.push('/cart');
                onClose();
              }}
            />
          </div>
        </div>
      </ClickAway>
    </div>
  );
};

export default CartDrawer;
