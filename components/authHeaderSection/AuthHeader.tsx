import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { RiShoppingBagLine } from 'react-icons/ri';
import { useStateValue } from '../../providers/StateContext';
import { DISPLAY_FORM } from '../../providers/stateTypes';
import CartDrawer from '../cart/CartDrawer';
export default function AuthHeader() {
  const [{ cart, user }, changeState] = useStateValue();
  const [displayCart, setDisplayCart] = useState(false);
  const router = useRouter();

  const onGoToProfile = () => {
    if (user) {
      router.push('/profile');
    } else {
      changeState({
        type: DISPLAY_FORM,
        payload: 'login',
      });
    }
  };
  return (
    <div className='h-full flex items-center flex-1 w-full justify-end'>
      <span
        onClick={() => setDisplayCart(true)}
        className='relative cursor-pointer p-2 transition-all hover:text-primary hover:scale-110'
      >
        <RiShoppingBagLine size={30} />
        <span className=' absolute w-6 h-6  -top-2 -right-2 rounded-full text-xs flex justify-center items-center  bg-primary text-white p-2  transition-all hover:text-primary hover:scale-110'>
          {cart.length}
        </span>
      </span>

      <span className='relative cursor-pointer p-2 transition-all hover:text-primary hover:scale-110'>
        <MdOutlineEmail size={30} />
        <span className=' absolute w-6 h-6  -top-2 -right-2 rounded-full text-xs flex justify-center items-center  bg-primary text-white p-2 '>
          10
        </span>
      </span>
      {!user && (
        <>
          <div onClick={onGoToProfile}>
            <span className='decoration-1 underline text-primary cursor-pointer p-2 transition-all hover:text-primary hover:scale-110'>
              SignIn/Signup
            </span>
          </div>
        </>
      )}

      {user && user !== null && (
        <>
          <div
            onClick={onGoToProfile}
            className='flex items-center cursor-pointer p-2 transition-all hover:text-primary hover:scale-110'
          >
            <BiUser size={30} />
          </div>
        </>
      )}

      {displayCart && (
        <CartDrawer open={displayCart} onClose={() => setDisplayCart(false)} />
      )}
    </div>
  );
}
