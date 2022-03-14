import React, { useState } from "react";
import Image from "next/image";
import Textfield from "../ui/TextField";
import Button from "../ui/Button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [personnumber, setPersonnumber] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmpassword, setComfirmPassword] = useState("");
  const [address, setaddress] = useState("");

  const [isAccept, setIsAccept] = useState(false);
  return (
    <>
      <main>
        <section className=" w-full h-full ">
          <div className="container mx-auto px-4  w-full h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-full sm:w-full px-4">
                <div className="relative flex  flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <form>
                      <div className="">
                        <div className="  inline-block p-2  w-1/2">
                          <div>
                            <Textfield
                              label=" First Name"
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
                              label="Last Name"
                              name="fields[last_name]"
                              placeholder="Your Last name"
                              type="text"
                              required
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                            />
                          </div>
                          <div>
                            <Textfield
                              label="Person Number"
                              name="fields[Person_Number]"
                              placeholder="Your Person Number"
                              type="text"
                              required
                              onChange={(e) => setPersonnumber(e.target.value)}
                              value={personnumber}
                            />
                          </div>
                          <div>
                            <Textfield
                              label="Address"
                              name="fields[Address]"
                              placeholder="Your Address"
                              type="text"
                              required
                              onChange={(e) => setaddress(e.target.value)}
                              value={personnumber}
                            />
                          </div>
                        </div>
                        <div className=" inline-block p-2 w-1/2">
                          <div>
                            <Textfield
                              label="Email"
                              name="fields[Email]"
                              placeholder="Your Email"
                              type="text"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                          </div>
                          <div>
                            <Textfield
                              label="Pasdword"
                              name="fields[Password]"
                              placeholder="Password"
                              type="text"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                            />
                          </div>
                          <div>
                            <Textfield
                              label="Comfirm Password"
                              name="fields[comfirm-password]"
                              placeholder="Comfirm Password"
                              type="text"
                              required
                              onChange={(e) =>
                                setComfirmPassword(e.target.value)
                              }
                              value={comfirmpassword}
                            />
                          </div>
                          <div>
                            <Textfield
                              label="Tel"
                              name="fields[Tel]"
                              placeholder="Your TelPhone"
                              type="text"
                              required
                              onChange={(e) => setTel(e.target.value)}
                              value={tel}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-6">
                        <div>
                          <Button size="xLarge" width="full">
                            Rigster
                          </Button>
                        </div>
                      </div>
                    </form>
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
