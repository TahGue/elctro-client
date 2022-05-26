import React, { useState } from 'react';
import Textfield from '../../ui/TextField';
import Button from '../../ui/Button';
import { useResetPassword } from '../../hooks/auth/useResetPassword';

type Iprops = {
  onSuccess?: () => void;
};

export default function ResetPassword({ onSuccess = () => {} }: Iprops) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { resetMutate, isLoading, isError } = useResetPassword();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (password === confirmPassword) {
      resetMutate({
        password,
      });
      onSuccess();
    }
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
                        label='Password'
                        name='password'
                        placeholder='New Password'
                        type='password'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>

                    <div>
                      <Textfield
                        label='Confrim Password'
                        name='password'
                        placeholder='Confirm your Password'
                        type='password'
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
