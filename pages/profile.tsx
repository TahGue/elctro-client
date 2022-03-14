import React, { useState } from 'react'
import Button from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import Textfield from '../ui/TextField';


    const profile = () => {
        
        const [firstname, setFirstName] = useState('');
        const [lastname, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        
        return (
          <div className='flex border border-grey rounded-md p-3'>
            <div className='flex  w-1/4 text-center border-grey border-r-2  mr-5'>
                <h1 className='text-xl'>My Profile</h1>
            </div>
            <div className='flex w-3/4'><form>
            <h1 className='text-xl'>Account Details</h1>
            <h2 className='text-lightgrey text-md '>Already have an account? Please, <link rel="stylesheet" href="/login.tsx" /> </h2>
              <div>
                <Textfield
                  label='first name'
                  name='fields[first_name]'
                  placeholder='Your first name'
                  type='text'
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstname}
                />
              </div>
              <div>
                <Textfield
                  label='last name'
                  name='fields[last_name]'
                  placeholder='Your last name'
                  type='text'
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastname}
                />
              </div>
              <div>
                <Textfield
                  label='E-mail'
                  name='email_address'
                  placeholder='Your email address'
                  required
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className=''>
                <Textfield
                  label='Phone'
                  name='Phone_data'
                  placeholder='Your Phone Number'
                  required
                  type='text'
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
              <div className='flex w-full justify-between items-center'>
                
                <div className='flex-end   '>
                  <Button  size='large'>Save</Button>
                </div>
              </div>
            </form>
          </div>
          </div>
        );
      };
  

export default profile