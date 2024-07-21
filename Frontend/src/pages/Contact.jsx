import React, { useState } from "react";
import InputBox from "../components/InputBox";
import axios from "axios";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formSubmit = async (firstName, lastName, email, phone, message) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/contact",
        {
          firstName,
          lastName,
          email,
          phone,
          message,
        }
      );

      if (response?.data?.success) {
        setSuccess("Message sent successfully!");
      } else {
        setError("Failed to send message.");
      }
    } catch (e) {
      setError("An error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full py-12 bg-[#000814] text-white lg:flex lg:justify-between space-x-4 px-4 lg:px-14">
      {/* Left */}
      <div className="flex flex-col w-full lg:w-[40%] max-h-[350px] space-y-6 p-6 bg-[#161D29] rounded-xl">
        <Help
          h={"Chat with us"}
          p1={"Our friendly team is here to help"}
          p2={"info@edubridge.com"}
        />
        <Help
          h={"Visit us"}
          p1={"Come and say hello at our office HQ."}
          p2={"New Mahavir Nagar, New Delhi-110018"}
        />
        <Help
          h={"Call us"}
          p1={"Mon - Fri from 8am to 5pm"}
          p2={"+91 123 234 2345"}
        />
      </div>
      {/* Right */}
      <div className="mt-20 lg:w-[60%] lg:mt-0 p-6 lg:p-12 rounded-md border-2">
        <div>
          <h1 className="text-3xl font-bold pb-3">
            Have an Idea? We've got the skills. <br /> Let's team up!
          </h1>
          <h2>Tell us more about yourself and what you have in mind.</h2>
          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formSubmit(firstName, lastName, email, phone, message);
            }}
          >
            <div className="flex justify-between space-x-2 sm:space-x-0 mt-3">
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
            <InputBox
              label="Phone Number"
              placeholder="12345 67890"
              value={phone}
              setvalue={setPhone}
              type="text"
            />
            <InputBox
              label="Message"
              placeholder="Enter your message here"
              value={message}
              setvalue={setMessage}
              type="text"
            />
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button
              className="w-full bg-yellow-500 py-2 mt-2 text-center text-black font-semibold text-xl rounded-md"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const Help = ({ h, p1, p2 }) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">{h}</h1>
      <p className="text-[#6E727F]">{p1}</p>
      <p className="text-[#6E727F]">{p2}</p>
    </div>
  );
};
