import React from "react";
import { IoMdCreate } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#000814] px-12 py-16 text-white">
      <h1 className="text-3xl sm:text-4xl font-semibold">My Profile</h1>

      <div className="mt-8 space-y-6">
        {/* Profile Header */}
        <div className="w-[90%] flex items-center justify-between bg-[#161D29] p-6 py-12 rounded-md">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-semibold">
              AS
            </div>
            <div>
              <h2 className="text-xl font-semibold">Abhinav Sharma</h2>
              <p className="text-gray-400">abhinavsharma6209@gmail.com</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/dashboard/settings");
          }}
          className="bg-[#FFD60A] font-semibold text-black px-4 py-2 rounded-md flex items-center space-x-2"
        >
          <span>Edit</span> <IoMdCreate />
        </button>

        {/* About Section */}
        <div className="w-[90%] flex items-center justify-between bg-[#161D29] p-6 py-12 rounded-md">
          <div>
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-gray-400">Write Something About Yourself</p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/dashboard/settings");
          }}
          className="bg-[#FFD60A] font-semibold text-black px-4 py-2 rounded-md flex items-center space-x-2"
        >
          <span>Edit</span> <IoMdCreate />
        </button>

        {/* Personal Details Section */}
        <div className="w-[90%] bg-[#161D29] p-6 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Personal Details</h2>
            <button
              onClick={() => {
                navigate("/dashboard/settings");
              }}
              className="bg-[#FFD60A] font-semibold text-black px-4 py-2 rounded-md flex items-center space-x-2"
            >
              <span>Edit</span> <IoMdCreate />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-md font-semibold ">First Name</h3>
              <p className="text-gray-400">Abhinav</p>
            </div>
            <div>
              <h3 className="text-md font-semibold">Last Name</h3>
              <p className="text-gray-400">Sharma</p>
            </div>
            <div>
              <h3 className="text-md font-semibold">Email</h3>
              <p className="text-gray-400">abhinavsharma6209@gmail.com</p>
            </div>
            <div>
              <h3 className="text-md font-semibold">Phone Number</h3>
              <p className="text-gray-400">Add Contact Number</p>
            </div>
            <div>
              <h3 className="text-md font-semibold">Gender</h3>
              <p className="text-gray-400">Add Gender</p>
            </div>
            <div>
              <h3 className="text-md font-semibold">Date Of Birth</h3>
              <p className="text-gray-400">January 1, 1970</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// local storage se user ka id nikalunga
// profile wala api me call maarunga
// data ko user ka fill kaeunga
//
//
//
//
//
//
//
//
//
//
//
//
