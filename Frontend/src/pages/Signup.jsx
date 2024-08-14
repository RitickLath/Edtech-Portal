import React, { useContext, useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState("Student");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Basic client-side validation
    if (password !== confirm) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const api_url = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${api_url}/signup`, {
        firstName,
        lastName,
        email,
        role,
        password,
      });

      // Store token in local storage
      if (response?.data?.success) {
        localStorage.setItem("token", `Bearer ${response.data.token}`);
        localStorage.setItem("role", response?.data?.role);
        localStorage.setItem("id", response?.data?.id);

        setSuccess(response?.data?.message || "Sign up successful");
        navigate("/verification");
      } else {
        setSuccess(
          response?.data?.message || "Invalid Input or Internal Server Error"
        );
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-full min-h-screen py-12 bg-[#000814] text-white md:flex md:justify-between px-6 lg:px-14">
        {/* Image div */}
        <div className="md:hidden flex justify-center mx-auto mb-12 w-full ">
          <img className="w-[100%]" src="\public\login_mobile.webp" alt="" />
        </div>

        {/* Input box */}
        <div className="flex justify-center items-center">
          <div className="max-w-[500px] md:max-w-[300] pr-4">
            <h1 className="text-3xl font-semibold pb-4">
              Join thousands of learners on EduBridge for free
            </h1>
            <h2 className="text-lg text-[#AFB2BF]">
              Empower your future with cutting-edge skills and knowledge
            </h2>
            <h3 className="text-lg italic font-semibold pb-3 text-[#47A5C5]">
              Education designed for your success.
            </h3>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Role Selector */}
              <div className="flex mb-4">
                <button
                  type="button"
                  className={`py-2 px-4 rounded-md ${
                    role === "Student"
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-700 text-white"
                  }`}
                  onClick={() => setRole("Student")}
                >
                  Student
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 rounded-md ${
                    role === "Instructor"
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-700 text-white"
                  }`}
                  onClick={() => setRole("Instructor")}
                >
                  Instructor
                </button>
              </div>
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
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <button
                type="submit"
                className="w-full bg-yellow-500 py-2 text-center text-black font-semibold text-xl rounded-md"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
          </div>
        </div>
        {/* Image div */}
        <div className="hidden md:flex h-[500px]">
          <img src="\public\login_desktop.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default Signup;
