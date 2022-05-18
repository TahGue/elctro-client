import { useRouter } from 'next/router';
import React from 'react';
import { BiUser } from 'react-icons/bi';
import ListItem from './ListItem';

function UserMenu() {
  const router = useRouter();

  return (
    <div className='p-2 border border-lightgrey rounded-sm'>
      <ListItem
        title='Profile'
        onClick={() => router.push('/profile')}
        Icon={<BiUser />}
      />

      <ListItem
        title='Profile'
        onClick={() => router.push('/profile')}
        Icon={<BiUser />}
      />

      <ListItem
        title='Profile'
        onClick={() => router.push('/profile')}
        Icon={<BiUser />}
      />
    </div>
  );
}

export default UserMenu;
