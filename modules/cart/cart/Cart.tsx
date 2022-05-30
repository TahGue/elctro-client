import React from 'react';
import { CartProduct } from '../../../types/DBTypes';
import CartItem from './CartItem';
import { useStateValue } from '../../../providers/StateContext';

function Cart() {
  const [{ cart }, changeState] = useStateValue();
  return (
    <div className=' bg-white w-full animate-fade-in-up'>
      {cart.map((product: CartProduct) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Cart;
