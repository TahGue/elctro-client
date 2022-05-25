import React from 'react';
import { useSettings } from '../../hooks/useSettings';
import Button from '../../ui/Button';
type IProps = {
  total: string | number;
  onCheckout?: () => void;
  onShopping?: () => void;
};
function CartSummery({ total, onCheckout, onShopping }: IProps) {
  const { currency } = useSettings();
  return (
    <div className='p-7 border border-primary rounded-8 w-full'>
      <h3 className=' text-black text-xl'>Summery</h3>
      <div className='flex justify-between items-center my-6'>
        <span>Total</span>
        <span>{`${total} ${currency}`}</span>
      </div>

      <Button onClick={onCheckout}>Checkout</Button>
      <div
        className=' p-2 text-center bg-white text-primary cursor-pointer'
        onClick={onShopping}
      >
        Continue shopping
      </div>
    </div>
  );
}

export default CartSummery;
