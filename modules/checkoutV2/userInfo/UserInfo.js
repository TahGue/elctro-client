import { useTranslation } from 'next-export-i18n';
import React from 'react';
import { useStateValue } from '../../../providers/StateContext';
import styles from './userInfo.module.css';
import { DISPLAY_FORM, SET_USER } from '../../../providers/stateTypes';
import { FaCheckCircle } from 'react-icons/fa';

function UserInfo() {
  const [{ user }, changeState] = useStateValue();
  const { t } = useTranslation();
  const onRegister = () => {
    changeState({
      type: DISPLAY_FORM,
      payload: 'register',
    });
  };

  const onLogout = () => {
    changeState({
      type: SET_USER,
      payload: null,
    });
    localStorage.removeItem('token');
  };

  if (user) {
    return (
      <div className={styles.loggedContainer}>
        <div>
          <span>{user.name}</span>
          <span onClick={onLogout} className={styles.link}>
            {t('notYou')}
          </span>
        </div>
        <div className=''>
          <FaCheckCircle color='#4caf50' size={24} />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <span>{t('RegisterToCompleteOrder')}</span>
      <button onClick={onRegister} className={styles.btn}>
        {t('register')}
      </button>
    </div>
  );
}

export default UserInfo;
