import React, { useState } from 'react';
import Empty from '../../components/empty/Empty';
import PrivateRoute from '../../components/privateRoute/PrivateRoute';
import AccountDetails from '../../modules/profile/AccountDetails';
import Favorite from '../../modules/profile/Favorite';

import TopMenu from '../../modules/profile/TopMenu';
import { useStateValue } from '../../providers/StateContext';

const ProfilePage = () => {
  const [selectedPage, setSelectedPage] = useState('profile');

  return (
    <PrivateRoute>
      <div className='w-full'>
        <TopMenu
          onSelect={(page: string) => setSelectedPage(page)}
          current={selectedPage}
        />

        {selectedPage === 'profile' && <AccountDetails />}
        {selectedPage === 'wishlist' && <Favorite />}
        {selectedPage === 'history' && <AccountDetails />}
        {selectedPage === 'logout' && <AccountDetails />}
      </div>
    </PrivateRoute>
  );
};

export default ProfilePage;
