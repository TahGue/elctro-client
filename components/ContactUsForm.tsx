import React, { useState } from "react";
import BoxedIcon from "../ui/BoxedIcon";
import Button from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";
import Textfield from "../ui/TextField";

const ContactUsForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [Subject, setSubject] = useState("");
  const [isAccept, setIsAccept] = useState(false);
  // TODO

  return (
    <div className="border border-grey rounded-md p-3">
      <form>
        <div>
          <Textfield
            label="name"
            name="fields[first_name]"
            placeholder="Your first name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
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
            label="Subject"
            name="Subject_data"
            placeholder="Your Subject"
            required
            type="text"
            onChange={(e) => setSubject(e.target.value)}
            value={Subject}
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <Checkbox
            name="isAccept"
            checked={isAccept}
            onChange={(e) => setIsAccept(!isAccept)}
            label="Accept Terms & Condition"
            color="primary"
          />
          <div>
            <Button size="large">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactUsForm;
