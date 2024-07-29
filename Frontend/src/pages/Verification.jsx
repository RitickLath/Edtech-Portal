import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Verification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    // if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submittedOtp = otp.join("");

    // Replace the URL with your API endpoint
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/verfication",
        {
          otp: submittedOtp,
          id: localStorage.getItem("id"),
          role: localStorage.getItem("role"),
        }
      );

      if (response.data.success) {
        navigate("/dashboard");
      } else {
        alert("Invalid OTP!");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Verify Your Account
        </h2>
        <p className="text-center mb-6 text-white">
          Enter the 6-digit OTP sent to your email
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                className="w-12 h-12 m-1 text-center border-2 border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
