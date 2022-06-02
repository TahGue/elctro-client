import React, { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import Textfield from '../../ui/TextField';
import Button from '../../ui/Button';
import { Checkbox } from '../../ui/Checkbox';
import { useLogin } from './authHooks/useLogin';
import { useRouter } from 'next/router';

type Iprops = {
  callbackUrl?: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
};

export default function Login({ callbackUrl = '/', setCurrentPage }: Iprops) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAccept, setIsAccept] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { loginMutate, isLoading, isError } = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loginMutate({
      email,
      password,
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
                <div className='rounded-t mb-0 px-6 py-6'>
                  <div className='text-center mb-3'>
                    <h6 className='text-grey text-sm font-bold'>
                      Sign in with
                    </h6>
                  </div>
                  <div className='btn-wrapper flex justify-center  text-center'>
                    <button
                      className='bg-primary active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
                      type='button'
                      style={{ transition: 'all .15s ease' }}
                    >
                      <Image
                        className='w-5 mr-1'
                        src={'/github.svg'}
                        layout='fixed'
                        width={30}
                        height={30}
                        alt='github'
                      />
                      <span className='text-white ml-1 '>Github</span>
                    </button>
                    <button
                      className='bg-primary active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
                      type='button'
                      style={{ transition: 'all .15s ease' }}
                    >
                      <Image
                        className='w-5 mr-1'
                        src={'/google.svg'}
                        layout='fixed'
                        width={30}
                        height={30}
                        alt='google'
                      />
                      <span className='text-white ml-1 '>Google</span>
                    </button>
                  </div>
                  <hr className='mt-6 border-b-1 border-grey' />
                </div>
                <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                  <div className='text-grey text-center mb-3 font-bold'>
                    <small>Or sign in with credentials</small>
                  </div>
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
                      <Textfield
                        label='Password'
                        name='fields[Password]'
                        placeholder='Password'
                        type='password'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>

                    <div className='flex justify-between'>
                      <div className='flex  justify-between items-center'>
                        <Checkbox
                          name='isAccept'
                          checked={isAccept}
                          onChange={(e) => setIsAccept(!isAccept)}
                          label=' Remember me'
                          color='primary'
                        />
                      </div>

                      <div className=''>
                        <div
                          onClick={() => setCurrentPage('forget')}
                          className='cursor-pointer'
                        >
                          <small>Forgot password?</small>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button
                        disabled={isLoading}
                        type='submit'
                        size='xLarge'
                        width='full'
                      >
                        {isLoading ? 'Loading...' : 'Sign in'}
                      </Button>
                    </div>
                  </form>
                  <div className='text-center mt-2 '>
                    <div
                      className='cursor-pointer'
                      onClick={() => setCurrentPage('signup')}
                    >
                      <small>Create new account</small>
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
