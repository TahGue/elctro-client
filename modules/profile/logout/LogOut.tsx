import Router, { useRouter } from 'next/router';
import React from 'react';
import { Container, Row } from 'react-grid-system';

function LogOut() {
  const router = useRouter();

  const onLogout = () => {
    //localStorage.removeItem('token');
    router.push('/');
  };
  return (
    <Container>
      <Row>
        <div className=' flex justify-center items-center w-full '>
          <div className='mt-10 mb-10'>
            <h3 className=' font-medium text-3xl text-primary text-center'>
              Log out
            </h3>
            <p className=' text-grey text-xl mt-5 mb-5'>
              Are you sure you want to logout
            </p>
            <button
              className='p-2 bg-primary text-white rounded-5 w-full'
              onClick={onLogout}
            >
              LogOut
            </button>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default LogOut;
