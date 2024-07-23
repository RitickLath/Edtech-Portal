import React, { useState } from "react";
import { CgProfile } from "react-icons/cg"; // profile icon
import { PiStudentBold } from "react-icons/pi"; // enrolled course icon
import { FaCartPlus } from "react-icons/fa"; // cart
import { IoCartOutline } from "react-icons/io5"; // cart
import { IoSettingsOutline } from "react-icons/io5"; // settings
import { IoLogOutOutline } from "react-icons/io5"; // logout
import { useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
  const [ActiveDiv, setActiveDiv] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="bg-[#161D29] w-[80px] sm:w-[200px] h-screen fixed">
      {/* <hr /> */}
      {/* BUTTON-1 */}
      <button
        onClick={() => {
          setActiveDiv(1);
          navigate("/dashboard/profile");
        }}
        className={`w-full flex space-x-2 items-center mt-8 py-2 px-6 text-[#646975] hover:text-[#dbddea] ${
          ActiveDiv === 1
            ? "bg-[#3D2A01] text-[#FFD60A] hover:text-[#FFD60A] border-l-2 border-[#FFD60A]"
            : ""
        }`}
      >
        <h2>
          <CgProfile className="text-xl" />
        </h2>
        <h2 className="hidden sm:flex">My Profile</h2>
      </button>

      {/* BUTTON-2 */}
      <button
        onClick={() => {
          setActiveDiv(2);
          navigate("/dashboard/course");
        }}
        className={`w-full flex space-x-2 items-center py-2 px-6 text-[#646975] hover:text-[#dbddea] ${
          ActiveDiv === 2
            ? "bg-[#3D2A01] text-[#FFD60A] hover:text-[#FFD60A] border-l-2 border-[#FFD60A]"
            : ""
        }`}
      >
        <h2>
          <PiStudentBold className="text-xl" />
        </h2>
        <h2 className="hidden sm:flex">Enrolled Courses</h2>
      </button>

      {/* BUTTON-3 */}
      <button
        onClick={() => {
          setActiveDiv(3);
          navigate("/dashboard/cart");
        }}
        className={`w-full flex space-x-2 items-center py-2 px-6 text-[#646975] hover:text-[#dbddea] ${
          ActiveDiv === 3
            ? "bg-[#3D2A01] text-[#FFD60A] hover:text-[#FFD60A] border-l-2 border-[#FFD60A]"
            : ""
        }`}
      >
        <h2>
          <FaCartPlus className="text-xl" />
        </h2>
        <h2 className="hidden sm:flex">Cart</h2>
      </button>

      {/* BUTTON-4 */}
      <button
        onClick={() => {
          setActiveDiv(4);
          navigate("/dashboard/settings");
        }}
        className={`w-full flex space-x-2 items-center mt-8 py-2 px-6 text-[#646975] hover:text-[#dbddea] ${
          ActiveDiv === 4
            ? "bg-[#3D2A01] text-[#FFD60A] hover:text-[#FFD60A] border-l-2 border-[#FFD60A]"
            : ""
        }`}
      >
        <h2>
          <IoSettingsOutline className="text-xl" />
        </h2>
        <h2 className="hidden sm:flex">Settings</h2>
      </button>

      {/* BUTTON-5 */}
      <button
        onClick={() => {
          setActiveDiv(5);
        }}
        className={`w-full flex space-x-2 items-center py-2 px-6 text-[#646975] hover:text-[#dbddea] ${
          ActiveDiv === 5
            ? "bg-[#3D2A01] text-[#FFD60A] hover:text-[#FFD60A] border-l-2 border-[#FFD60A]"
            : ""
        }`}
      >
        <h2>
          <IoLogOutOutline className="text-xl" />
        </h2>
        <h2 className="hidden sm:flex">Logout</h2>
      </button>
    </div>
  );
};

export default DashboardSidebar;
