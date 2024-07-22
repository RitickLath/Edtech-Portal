import React, { useContext, useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate, isAuthenticated]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    console.log("call");
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        email,
        password,
      });

      // Store token in local storage

      if (response?.data?.success) {
        localStorage.setItem("token", `Bearer ${response.data.token}`);
        setSuccess(response?.data?.message || "Sign in successful");
        navigate("/dashboard");
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
    <div className="w-full h-full min-h-screen py-12 bg-[#000814] text-white md:flex md:justify-between px-10 lg:px-14">
      {/* Image div */}
      <div className="md:hidden border-2 mx-auto w-[400px] h-[400px]"></div>
      {/* Input box */}
      <div className="flex justify-center items-center md:pr-4">
        <div className="max-w-[450px]">
          <h1 className="text-3xl font-semibold pb-4">Welcome Back!</h1>
          <h2 className="text-lg text-[#AFB2BF]">
            Empower your future with cutting-edge skills and knowledge
          </h2>
          <h3 className="text-lg italic font-semibold pb-3 text-[#47A5C5]">
            Education designed for your success.
          </h3>
          <form onSubmit={handleSubmit}>
            <InputBox
              label="Email Address"
              placeholder="Enter Email Address"
              value={email}
              setvalue={setEmail}
              type="email"
            />
            <InputBox
              label="Password"
              placeholder="Enter Password"
              value={password}
              setvalue={setPassword}
              type="password"
            />
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button
              type="submit"
              className="w-full bg-yellow-500 py-2 text-center text-black font-semibold text-xl rounded-md"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>
        </div>
      </div>
      {/* Image div */}
      <div className="hidden md:flex border-2 w-[400px] h-[400px]"></div>
    </div>
  );
};

export default Login;
