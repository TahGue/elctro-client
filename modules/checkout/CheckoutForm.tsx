import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useStateValue } from '../../providers/StateContext';
import Button from '../../ui/Button';

interface MyFormValues {
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  contact: string;
  postcode: string;
  country: string;
  note: string;
}

const checkoutSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  contact: Yup.string()
    .required('This field is Required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    ),
  postcode: Yup.string().required(),
  street: Yup.string().required(),
});

export const CheckoutForm: React.FC<{}> = () => {
  const [{ user }] = useStateValue();

  const initialValues: MyFormValues = {
    firstName: user ? user.name.slice(' ')[0] : '',
    lastName: user ? user.name.slice(' ')[1] : '',
    city: user && user.address ? user.address.city : '',
    street: user && user.address ? user.address.street : '',
    contact: user && user.tel ? user.tel : '',
    postcode: user && user.address ? user.address.postcode : '',
    country: user && user.address ? user.address.country : 'Sweden',
    note: '',
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div className=' flex row'>
            <div className=' w-1/2 p-2'>
              <label htmlFor='firstName'>First Name</label>
              <Field
                id='firstName'
                name='firstName'
                placeholder='First Name'
                className='w-full p-2 border border-lightgrey'
              />
            </div>
            <div className='w-1/2 p-2'>
              <label htmlFor='firstName'>Last Name</label>
              <Field
                id='lastName'
                name='lastName'
                placeholder='Last Name'
                className='w-full p-2 border border-lightgrey'
              />
            </div>
          </div>

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
            <div className='w-1/2 p-2'>
              <label htmlFor='tel'>Phone</label>
              <Field
                id='tel'
                name='tel'
                placeholder='tel'
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
            <div className='w-1/2 p-2'>
              <label htmlFor='note'>Note</label>
              <Field
                id='note'
                name='note'
                placeholder='note'
                className='w-full p-2 border border-lightgrey'
              />
            </div>
          </div>

          <Button type='submit'>Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};
