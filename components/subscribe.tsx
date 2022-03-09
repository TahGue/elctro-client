import React, { useState } from 'react'
import BoxedIcon from '../ui/BoxedIcon'

const SubscribeForm = () => {
    const [email, setEmail] = useState("")
    
    const handleSubmit = async (event: React.FormEvent) => {
      // TODO
    }
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setEmail(value)
    }
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
     
    }
  
    return (
      <div className='bg-lightgreyx2 p-5 '>
        <h1 className=' text-center text-2xl text-black '>Join our newsletter now!</h1>
        <h4 className='text-center text-lightgrey  '>Register now and get our latest update and  promos.</h4>
      <form onSubmit={handleSubmit}>
      <div className=' flex w-full justify-center items-center h-14 pb-2 mt-8'><input className='h-14 p-1'
          aria-label="Your email address"
          name="email_address"
          placeholder="Your email address"
          required
          type="email"
          onChange={handleEmailChange}
          value={email}
        
          
          />
          <BoxedIcon >Join</BoxedIcon>
           </div>
        
      </form>
     
      </div>
    )
  }

export default SubscribeForm