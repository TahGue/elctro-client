import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useStateValue } from "../../providers/StateContext";
import { DISPLAY_FORM } from "../../providers/stateTypes";
import Button from "../../ui/Button";
import { ClickAway } from "../../ui/ClickAway";
import { Overlay } from "../../ui/Overlay";

interface MyFormValues {
   
    city: string;
    street: string;
    contact: string;
    postcode: string;
    country: string;
   
   
  }

function AddressModel() {
    
  
  const [{ displayForm }, changeState] = useStateValue();
  const [{ user }] = useStateValue();

  const initialValues: MyFormValues = {
      city: user ? user.address.city : '',
      street: user ? user.address.street : '',
      postcode: user ? user.address.postcode : '',
      country: user && user.address ? user.address.country : 'Sweden',
      contact: ""
  };
  return (
    <Overlay open={displayForm === "Address"}>
      <ClickAway
        onClickAway={() =>
          changeState({
            type: DISPLAY_FORM,
            payload: "",
          })
        }

      >
           <Formik
        initialValues={initialValues}
          onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      ></Formik>
          <Form>
         
            

          <div className=' flex row'>
            <div className=' w-1/2 p-2'>
              <label htmlFor='country'>Country</label>
              <Field
                id='country'
                name='country'
                placeholder='Country'
                className='w-full p-2 border border-lightgrey'
              />
            </div>
            <div className='w-1/2 p-2'>
              <label htmlFor='city'>City</label>
              <Field
                id='city'
                name='city'
                placeholder='City'
                className='w-full p-2 border border-lightgrey'
              />
            </div>
          </div>

          <div className=' flex row'>
            <div className=' w-1/2 p-2'>
              <label htmlFor='street'>Street</label>
              <Field
                id='street'
                name='street'
                placeholder='street'
                className='w-full p-2 border border-lightgrey'
              />
            </div>
           
          </div>

          <div className=' flex row'>
            <div className=' w-1/2 p-2'>
              <label htmlFor='postcode'>Postal code</label>
              <Field
                id='postcode'
                name='postcode'
                placeholder='postcode'
                className='w-full p-2 border border-lightgrey'
              />
            </div>
           
          </div>

          <Button type='submit'>Submit</Button>
        </Form>
       
      </ClickAway>
    </Overlay>
  );
}

export default AddressModel;
