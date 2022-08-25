import React, { useState } from 'react';
import { useStateValue } from '../../../providers/StateContext';
import AddressForm from '../../profile/AddressForm';
import RegisterNewUser from './RegisterNewUser';

type IProps = {
  isActive: boolean;
  onGoNext: () => void;
};
function UserInfo({ isActive, onGoNext }: IProps) {
  const [{ user }] = useStateValue();
  const [displayForm, setDisplayForm] = useState(false);

  if (user) {
    return (
      <div
        className={`border border-1 w-full ${
          isActive ? 'border-primary' : 'border-grey'
        }`}
      >
        <div className='flex justify-between items-center w-full'>
          <div>
            <h3>{user.name}</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border border-1 w-full p-2  rounded-8 ${
        isActive ? 'border-primary' : 'border-grey'
      }`}
    >
      <button
        onClick={() => setDisplayForm(!displayForm)}
        className='flex justify-between items-center w-full'
      >
        <div>
          <h3>Add adddress</h3>
        </div>
      </button>
      {displayForm && (
        <RegisterNewUser
          title='Your information'
          onSave={() => {
            setDisplayForm(false);
            onGoNext();
          }}
          displayNote={false}
        />
      )}
    </div>
  );
}

export default UserInfo;
