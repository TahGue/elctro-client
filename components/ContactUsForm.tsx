import React, { useState } from 'react'
import BoxedIcon from "../ui/BoxedIcon"
import Textfield from './textfield'
const ContactUsForm = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [Subject, setSubject] = useState("")
  
    const handleSubmit = async (event: React.FormEvent) => {
      // TODO
    }
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setEmail(value)
    }
  
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setName(value)
    }
    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setSubject(value)
      }
  
    return (
      <div className='border border-grey rounded-md p-3'><form onSubmit={handleSubmit}>
        <div><Textfield
         label='name'
          name="fields[first_name]"
          placeholder="Your first name"
          type="text"
          required
          onChange={onChange}
          value={name}
        />
        </div>
        <div><Textfield
         label='E-mail'
          name="email_address"
          placeholder="Your email address"
          required
          type="email"
          onChange={onChange}
          value={email}
        />
        </div>
        <div className=''>
        <Textfield 
          label='Subject'
          name="Subject_data"
          placeholder="Your Subject"
          required
          type="text"
          onChange={onChange}
          value={Subject}
        />
        </div>
        <div>
        <BoxedIcon>Submit</BoxedIcon>
        </div>
      </form>
      </div>
    )
  }
  export default ContactUsForm