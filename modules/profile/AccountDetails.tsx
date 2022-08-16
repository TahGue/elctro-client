import React, { useEffect } from "react";
import Button from "../../ui/Button";
import Textfield from "../../ui/TextField";
import { useState } from "react";
import { useStateValue } from "../../providers/StateContext";

function AccountDetails() {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tel, setPhone] = useState<string>("");
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      setFirstName(user.name.split(" ")[0]);
      setLastName(user.name.split(" ")[1]);
      setEmail(user.email);
      setPhone(user.tel);
    }
  }, []);
  return (
    <div className="flex w-full justify-center items-center mt-4">
      <form className="w-1/2">
        <h1 className="text-xl">Account Details</h1>
        <h2 className="text-lightgrey text-md ">
          Already have an account? Please,{" "}
          <link rel="stylesheet" href="/login.tsx" />{" "}
        </h2>
        <div>
          <Textfield
            label="first name"
            name="fields[first_name]"
            placeholder="Your first name"
            type="text"
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
        </div>
        <div>
          <Textfield
            label="last name"
            name="fields[last_name]"
            placeholder="Your last name"
            type="text"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
        </div>
        <div>
          <Textfield
            label="E-mail"
            name="email_address"
            placeholder="Your email address"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="">
          <Textfield
            label="Phone"
            name="Phone_data"
            placeholder="Your Phone Number"
            required
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={tel}
          />
        </div>
        <div className="flex w-full justify-between items-center mt-4">
          <Button size="large">Save</Button>
        </div>
      </form>
    </div>
  );
}

export default AccountDetails;
