import { useRouter } from 'next/router';
import React from 'react';
import TopMenuItem from './TopMenuItem';

type IProps = {
  onSelect: (a: string) => void;
  current?: string;
};
function TopMenu({ onSelect, current }: IProps) {
  const router = useRouter();

  return (
    <div className='w-full inline-block text-center my-4'>
      <TopMenuItem
        title='Profile'
        onClick={() => onSelect('profile')}
        current={current === 'profile'}
      />
      <TopMenuItem
        title='Address'
        onClick={() => onSelect('address')}
        current={current === 'address'}
      />
      <TopMenuItem
        title='Wishlist'
        onClick={() => onSelect('wishlist')}
        current={current === 'wishlist'}
      />
      <TopMenuItem
        title='History'
        onClick={() => onSelect('history')}
        current={current === 'history'}
      />
      <TopMenuItem
        title='Logout'
        onClick={() => onSelect('logout')}
        current={current === 'logout'}
      />
    </div>
  );
}

export default TopMenu;
