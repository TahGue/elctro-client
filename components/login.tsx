import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <main>
        <section className="absolute w-full h-full ">
          <div className="container mx-auto px-4  w-full h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-full sm:w-full px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-grey text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper flex justify-center  text-center">
                      <button
                        className="bg-primary active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <Image
                          className="w-5 mr-1"
                          src={"/github.svg"}
                          layout="fixed"
                          width={30}
                          height={30}
                        />
                        <span className="text-white ml-1 ">Github</span>
                      </button>
                      <button
                        className="bg-primary active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <Image
                          className="w-5 mr-1"
                          src={"/google.svg"}
                          layout="fixed"
                          width={30}
                          height={30}
                        />
                        <span className="text-white ml-1 ">Google</span>
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-grey " />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-grey text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-black text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border border-grey px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border border-grey px-3 py-3 placeholder-grey text-grey-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded  ml-1 w-3 h-3"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-xs font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                        <div className="">
                          <a href="#pablo" className="text-primary">
                            <small>Forgot password?</small>
                          </a>
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                    <div className="text-center mt-2 ">
                      <a href="#pablo" className="text-primary">
                        <small>Create new account</small>
                      </a>
                    </div>
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
