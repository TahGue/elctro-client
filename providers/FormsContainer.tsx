import React from 'react';
import Main from '../modules/auth/Main';
import { useStateValue } from './StateContext';

function FormsContainer({ children }: { children: React.ReactNode }) {
  const [{ displayForm }, changeState] = useStateValue();
  return (
    <>
      {children}
      {displayForm === 'login' && <Main />}
    </>
  );
}

export default FormsContainer;
