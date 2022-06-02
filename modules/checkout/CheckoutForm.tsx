import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useStateValue } from "../../providers/StateContext";
import Button from "../../ui/Button";
import { SET_USER } from "../../providers/stateTypes";
import { Address } from "../../types/DBTypes";

interface MyFormValues {
  city: string;
  street: string;
  postcode: string;
  country: string;
}

const checkoutSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  contact: Yup.string()
    .required("This field is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  postcode: Yup.string().required(),
  street: Yup.string().required(),
});

export const CheckoutForm: React.FC<{}> = () => {
  const [{ user }, changeState] = useStateValue();

  const initialValues: MyFormValues = {
    country: user && user.address ? user.address.country : "Sweden",
    city: "",
    street: "",
    postcode: "",
  };
  return (
    <div>
      {JSON.stringify(user)}
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
          <div className=" flex row">
            <div className=" w-1/2 p-2">
              <label htmlFor="firstName">First Name</label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 border border-lightgrey"
              />
            </div>
            <div className="w-1/2 p-2">
              <label htmlFor="firstName">Last Name</label>
              <Field
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 border border-lightgrey"
              />
            </div>
          </div>

          <div className=" flex row">
            <div className="w-1/2 p-2">
              <label htmlFor="tel">Phone</label>
              <Field
                id="tel"
                name="tel"
                placeholder="tel"
                className="w-full p-2 border border-lightgrey"
              />
            </div>

            <div className="w-1/2 p-2">
              <label htmlFor="email">email</label>
              <Field
                id="email"
                name="email"
                placeholder="email"
                className="w-full p-2 border border-lightgrey"
              />
            </div>
          </div>
          <div className="flex row mt-2 mb-2">
            <select name="Select Address" id="">
              {user?.addresses?.map((add:Address) => {
                return <option value={add.id}>{add.street}</option>;
              })}
            </select>
            <Button
              type="button"
              onClick={() => {
                changeState({
                  type: SET_USER,
                  payload: "Adress",
                });
              }}
            >
              Add new address
            </Button>
          </div>

          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};
