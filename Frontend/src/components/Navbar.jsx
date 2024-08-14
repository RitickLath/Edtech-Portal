import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-14 bg-[#000814] text-[#DBDDEA] fixed z-[100] border-b-[1px] border-[#32313D]">
      <div className="flex justify-between h-full items-center px-6 sm:px-12 md:px-20 text-lg ">
        <div>EduBridge</div>
        {/* hidden sm:flex */}
        <div className="flex justify-between space-x-4 lg:space-x-8">
          {localStorage.getItem("role") !== "Instructor" && (
            <Link to="/">Home</Link>
          )}
          {localStorage.getItem("role") !== "Instructor" && (
            <Link to="about">About Us</Link>
          )}
          {localStorage.getItem("role") !== "Instructor" && (
            <Link to="/course">Courses</Link>
          )}
          {localStorage.getItem("role") !== "Instructor" && (
            <Link to="contact">Contact Us</Link>
          )}
        </div>
        {!localStorage.getItem("token") ? (
          <div className="flex justify-between space-x-4">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="bg-[#32313D] px-3 py-[1px] rounded-md shadow-md hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
            >
              Log in
            </button>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="bg-[#32313D] px-3 py-[1px] rounded-md shadow-md hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
            >
              Sign up
            </button>
          </div>
        ) : (
          <div className="flex justify-between space-x-4">
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="bg-[#32313D] px-3 py-[1px] rounded-md shadow-md hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
            >
              <div className="flex space-x-2 items-center">
                <MdOutlineDashboardCustomize className="text-xl" />
                <h1>Profile</h1>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
