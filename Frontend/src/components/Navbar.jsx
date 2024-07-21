import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ dynamic = "My Learning" }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-14 bg-[#161D29] text-[#DBDDEA]">
      <div className="flex justify-between h-full items-center px-6 sm:px-12 md:px-20 text-lg font-medium">
        <div>EduBridge</div>
        <div className="flex justify-between space-x-4 lg:space-x-8">
          <Link to="/">Home</Link>
          <Link to="about">About Us</Link>
          <Link>{dynamic}</Link>
          <Link to="contact">Contact Us</Link>
        </div>
        <div className="flex justify-between space-x-4">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="border-[1px] px-2 py-[1px] rounded-md"
          >
            Log in
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="border-[1px] px-2 py-[1px] rounded-md"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
