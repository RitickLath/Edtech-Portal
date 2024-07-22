import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = ({ dynamic = "My Learning" }) => {
  const { isAuthenticated } = useContext(AuthContext);
  // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="w-full h-14 bg-[#161D29] text-[#DBDDEA]">
      <div className="flex justify-between h-full items-center px-6 sm:px-12 md:px-20 text-lg ">
        <div>EduBridge</div>
        <div className="hidden sm:flex justify-between space-x-4 lg:space-x-8">
          <Link to="/">Home</Link>
          <Link to="about">About Us</Link>
          <Link>{dynamic}</Link>
          <Link to="contact">Contact Us</Link>
        </div>
        {isAuthenticated && (
          <div className="flex justify-between space-x-4">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="border-[1px] px-3 py-[1px] rounded-md shadow-md hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
            >
              Log in
            </button>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="border-[1px] px-3 py-[1px] rounded-md shadow-md hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
