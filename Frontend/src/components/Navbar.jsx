import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDashboardCustomize, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="w-full h-14 bg-[#000814] text-[#DBDDEA] fixed z-[100] border-b-[1px] border-[#32313D]">
      <div className="flex justify-between h-full items-center px-6 sm:px-12 md:px-20 text-lg">
        <div>EduBridge</div>

        {/* Hamburger Icon for mobile */}
        <div className="sm:hidden">
          <button onClick={toggleSidebar}>
            {sidebarOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden sm:flex justify-between space-x-4 lg:space-x-8">
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

        {/* Auth buttons */}
        {!localStorage.getItem("token") ? (
          <div className="hidden sm:flex justify-between space-x-4">
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
          <div className="hidden sm:flex justify-between space-x-4">
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

      {/* Sidebar for mobile view */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#000814] text-[#DBDDEA] transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-[200]`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <Link to="/" onClick={closeSidebar}>
            Home
          </Link>
          <Link to="/about" onClick={closeSidebar}>
            About Us
          </Link>
          <Link to="/course" onClick={closeSidebar}>
            Courses
          </Link>
          <Link to="/contact" onClick={closeSidebar}>
            Contact Us
          </Link>
          {!localStorage.getItem("token") ? (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                  closeSidebar();
                }}
                className="bg-[#32313D] px-3 py-2 rounded-md shadow-md hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  closeSidebar();
                }}
                className="bg-[#32313D] px-3 py-2 rounded-md shadow-md hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
              >
                Sign up
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/dashboard");
                closeSidebar();
              }}
              className="bg-[#32313D] px-3 py-2 rounded-md shadow-md hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
            >
              <div className="flex space-x-2 items-center">
                <MdOutlineDashboardCustomize className="text-xl" />
                <h1>Profile</h1>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
