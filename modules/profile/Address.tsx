import React, { useEffect } from "react";
import Button from "../../ui/Button";
import Textfield from "../../ui/TextField";
import { useState } from "react";
import { useStateValue } from "../../providers/StateContext";
import { useAddresses } from "./api/useAddresses";

export default function Address() {
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const { data, isLoading } = useAddresses();

  useEffect(() => {
    if (data) {
      setCountry(data?.address?.country);
      setCity(data?.address?.city);
      setStreet(data?.address?.street);
      setPostcode(data?.address?.postcode);
      setNote(data?.address?.note);
    }
  }, [data]);
  return (
    <div className="flex w-full justify-center items-center mt-4">
      <form className="w-1/2">
        <h1 className="text-xl">Address</h1>
        <h2 className="text-lightgrey text-md ">
          Already have an account? Please,{" "}
          <link rel="stylesheet" href="/login.tsx" />{" "}
        </h2>

        <div className="">
          <Textfield
            label="Country"
            name="Country_data"
            placeholder="Your Country"
            required
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />{" "}
        </div>
        <div className="">
          <Textfield
            label="City"
            name="City_data"
            placeholder="Your City"
            required
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className="">
          <Textfield
            label="Street"
            name="Street_data"
            placeholder="Your Street"
            required
            type="text"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />
        </div>
        <div className="">
          <Textfield
            label="Postcode"
            name="Postcode_data"
            placeholder="Your Postcode"
            required
            type="text"
            onChange={(e) => setPostcode(e.target.value)}
            value={postcode}
          />
        </div>
        <div className="">
          <Textfield
            label="Note"
            name="Note_data"
            placeholder="Your Note"
            required
            type="text"
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
        </div>

        <div className="flex w-full justify-between items-center mt-4">
          <Button size="large">Save</Button>
        </div>
      </form>
    </div>
  );
}
