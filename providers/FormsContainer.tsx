import React from 'react';
import Main from '../modules/auth/Main';
import AddressModel from '../modules/profile/AdressModel';
import { useStateValue } from './StateContext';

function FormsContainer({ children }: { children: React.ReactNode }) {
  const [{ displayForm }, changeState] = useStateValue();
  return (
    <>
      {children}
      {displayForm === 'login' && <Main />}
      {displayForm === 'Address' && <AddressModel />}
    </>
  );
}

export default FormsContainer;
