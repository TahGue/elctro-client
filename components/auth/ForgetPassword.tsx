import React, { Dispatch, SetStateAction, useState } from 'react';
import Textfield from '../../ui/TextField';
import Button from '../../ui/Button';
import { useRouter } from 'next/router';
import { useRequestPassword } from '../../hooks/auth/useRequestPassword';

type Iprops = {
  callbackUrl?: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
};

export default function ForgetPassword({
  callbackUrl = '/',
  setCurrentPage,
}: Iprops) {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const { requestMutate, isLoading, isError } = useRequestPassword();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    requestMutate({
      email,
    });
    router.push(callbackUrl);
  };

  return (
    <main>
      <section className=' w-full h-full bg-white '>
        <div className='container mx-auto px-4  w-full h-full'>
          <div className='flex content-center items-center justify-center h-full'>
            <div className='w-full lg:w-full sm:w-full px-4'>
              <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
                <div className='rounded-t mb-0 px-6 py-6'></div>
                <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <Textfield
                        label='Email'
                        name='fields[Email]'
                        placeholder='Your Email'
                        type='text'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>

                    <div>
                      <Button
                        disabled={isLoading}
                        type='submit'
                        size='xLarge'
                        width='full'
                      >
                        {isLoading ? 'Loading...' : 'Send Request'}
                      </Button>
                    </div>
                  </form>
                  <div className='text-center mt-2 '>
                    <div
                      className='cursor-pointer'
                      onClick={() => setCurrentPage('login')}
                    >
                      <small>Login</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
