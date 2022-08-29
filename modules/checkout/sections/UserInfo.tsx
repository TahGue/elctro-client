import { useTranslation } from 'next-export-i18n';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useStateValue } from '../../../providers/StateContext';
import { DISPLAY_FORM } from '../../../providers/stateTypes';
import AddressForm from '../../profile/AddressForm';
import RegisterNewUser from './RegisterNewUser';

type IProps = {
  isActive: boolean;
  onGoNext: () => void;
};
function UserInfo({ isActive, onGoNext }: IProps) {
  const [{ user }, changeState] = useStateValue();
  const [displayForm, setDisplayForm] = useState(false);
  const { t } = useTranslation();
  const onDisplayLogin = () => {
    changeState({
      type: DISPLAY_FORM,
      payload: 'login',
    });
  };
  if (user) {
    return (
      <div
        className={`border border-1 w-full rounded-8 p-2 ${
          isActive ? 'border-green' : 'border-grey'
        }`}
      >
        <div className='flex justify-between items-center w-full'>
          <div>
            <h3>{user.name}</h3>
          </div>
          <div className='text-green'>
            <FaCheckCircle />
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
        onClick={onDisplayLogin}
        className='flex justify-between items-center w-full'
      >
        <div>
          <h3>{t('pleaseLogin')}</h3>
        </div>
      </button>
    </div>
  );
}

export default UserInfo;
