import React from "react";

const Navbar = ({ dynamic = "My Learning" }) => {
  return (
    <div className="w-full h-14 bg-[#161D29] text-[#DBDDEA]">
      <div className="flex justify-between h-full items-center px-20 text-lg font-medium">
        <div>EduBridge</div>
        <div className="flex justify-between space-x-4 lg:space-x-8">
          <div>Home</div>
          <div>About Us</div>
          <div>{dynamic}</div>
        </div>
        <div className="flex justify-between space-x-4">
          <button className="border-[1px] px-2 py-[1px] rounded-md">
            Log in
          </button>
          <button className="border-[1px] px-2 py-[1px] rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
