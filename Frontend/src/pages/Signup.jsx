import React, { useState } from "react";
import InputBox from "../components/InputBox";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <div className="w-full h-full min-h-screen py-12 bg-[#000814] text-white md:flex md:justify-between px-10 lg:px-14">
      {/* Image div */}
      <div className="md:hidden border-2 mx-auto w-[400px] h-[400px]"></div>
      {/* Input box */}
      <div className="flex justify-center items-center">
        <div className="max-w-[500px]">
          <h1 className="text-3xl font-semibold">
            Join thousands of learners on EduBridge for free
          </h1>
          <h2 className="text-lg text-[#AFB2BF]">
            Empower your future with cutting-edge skills and knowledge
          </h2>
          <h3 className="text-lg italic font-semibold text-[#47A5C5]">
            Education designed for your success.
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Submitted");
            }}
            action=""
          >
            <div className="flex justify-between space-x-2 sm:space-x-0">
              <InputBox
                label="First Name"
                placeholder="Enter First Name"
                value={firstName}
                setvalue={setFirstName}
                type="text"
              />
              <InputBox
                label="Last Name"
                placeholder="Enter Last Name"
                value={lastName}
                setvalue={setLastName}
                type="text"
              />
            </div>
            <InputBox
              label="Email Address"
              placeholder="Enter Email Address"
              value={email}
              setvalue={setEmail}
              type="email"
            />
            <div className="flex justify-between space-x-2">
              <InputBox
                label="Create Password"
                placeholder="Enter Password"
                value={password}
                setvalue={setPassword}
                type="password"
              />
              <InputBox
                label="Confirm Password"
                placeholder="Confirm Password"
                value={confirm}
                setvalue={setConfirm}
                type="password"
              />
            </div>
            <button className="w-full bg-[yellow] py-2 text-center text-black font-semibold text-xl rounded-md">
              Create Account
            </button>
          </form>
        </div>
      </div>
      {/* Image div */}
      <div className="hidden md:flex border-2 w-[400px] h-[400px]"></div>
    </div>
  );
};

export default Signup;
