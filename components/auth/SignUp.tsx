import { useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Textfield from './../../ui/TextField';
import Button from '../../ui/Button';
import { useRegister } from '../../hooks/auth/useRegister';
import { useRouter } from 'next/router';

type Iprops = {
  callbackUrl?: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
};
export default function SignUp({ setCurrentPage, callbackUrl = '/' }: Iprops) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tel, setTel] = useState('');
  const [personal_number, setPersonal_number] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmpassword, setComfirmPassword] = useState('');

  const router = useRouter();

  const { registerMutate, isLoading, isError } = useRegister();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password !== comfirmpassword)
      registerMutate({
        email,
        password,
        name: `${firstName} ${lastName}`,
        tel,
        personal_number,
      });
    router.push(callbackUrl);
  };

  return (
    <>
      <main>
        <section className=' w-full h-full bg-white '>
          <div className='container mx-auto px-4  w-full h-full'>
            <div className='flex content-center items-center justify-center h-full'>
              <div className='w-full lg:w-full sm:w-full px-4'>
                <div className='relative flex  flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
                  <div className='rounded-t mb-0 px-6 py-6'>
                    <form onSubmit={handleSubmit}>
                      <div className=''>
                        <div className='  inline-block p-2  lg:w-1/2 md:w-full sm:w-full '>
                          <div>
                            <Textfield
                              label=' First Name'
                              name='fields[first_name]'
                              placeholder='Your first name'
                              type='text'
                              required
                              onChange={(e) => setFirstName(e.target.value)}
                              value={firstName}
                            />
                          </div>
                          <div>
                            <Textfield
                              label='Last Name'
                              name='fields[last_name]'
                              placeholder='Your Last name'
                              type='text'
                              required
                              onChange={(e) => setLastName(e.target.value)}
                              value={lastName}
                            />
                          </div>
                          <div>
                            <Textfield
                              label='Person Number'
                              name='fields[Person_Number]'
                              placeholder='Your Person Number'
                              type='text'
                              required
                              onChange={(e) =>
                                setPersonal_number(e.target.value)
                              }
                              value={personal_number}
                            />
                          </div>
                        </div>
                        <div className=' inline-block p-2 w-1/2 lg:w-1/2 md:w-full sm:w-full'>
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
                              label='Pasdword'
                              name='fields[Password]'
                              placeholder='Password'
                              type='text'
                              required
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                            />
                          </div>
                          <div>
                            <Textfield
                              label='Comfirm Password'
                              name='fields[comfirm-password]'
                              placeholder='Comfirm Password'
                              type='text'
                              required
                              onChange={(e) =>
                                setComfirmPassword(e.target.value)
                              }
                              value={comfirmpassword}
                            />
                          </div>
                          <div>
                            <Textfield
                              label='Tel'
                              name='fields[Tel]'
                              placeholder='Your TelPhone'
                              type='text'
                              required
                              onChange={(e) => setTel(e.target.value)}
                              value={tel}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='text-center mt-6'>
                        <div>
                          <Button
                            disabled={isLoading}
                            type='submit'
                            size='xLarge'
                            width='full'
                          >
                            {isLoading ? 'Loading...' : 'Sign Up'}
                          </Button>
                        </div>
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
    </>
  );
}
