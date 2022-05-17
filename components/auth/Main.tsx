import React, { useState } from 'react';
import { ClickAway } from '../../ui/ClickAway';
import { Overlay } from '../../ui/Overlay';
import ForgetPassword from './ForgetPassword';
import Login from './login';
import SignUp from './SignUp';

function Main() {
  const [currentPage, setCurrentPage] = useState('login');
  const [open, setOpen] = useState(true);

  return (
    <Overlay open={open}>
      <ClickAway onClickAway={() => setOpen(false)}>
        {currentPage === 'login' && (
          <Login callbackUrl={''} setCurrentPage={setCurrentPage} />
        )}

        {currentPage === 'signup' && <SignUp setCurrentPage={setCurrentPage} />}
        {currentPage === 'forget' && (
          <ForgetPassword setCurrentPage={setCurrentPage} />
        )}
      </ClickAway>
    </Overlay>
  );
}

export default Main;
