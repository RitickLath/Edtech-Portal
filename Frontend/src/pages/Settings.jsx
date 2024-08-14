import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  IoCloudUploadOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoTrashBinSharp,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Settings = ({ data, setData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setbio] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const navigate = useNavigate();

  const updateDetails = () => {
    const api_url = import.meta.env.VITE_API_URL;
    const response = axios
      .post(`${api_url}/update`, {
        firstName,
        lastName,
        dob,
        gender,
        contactNumber,
        about,
        location,
        bio,
        email: data?.user?.email,
        role: localStorage.getItem("role"),
      })
      .then((res) => {
        setData(res.data.user);
        navigate("/dashboard");
      })
      .catch((e) => {
        console.log("Error Occured", e);
      });
  };

  return (
    <div className="w-full bg-[#000814] px-4 py-16 text-white">
      <h1 className="text-3xl sm:text-4xl font-semibold lg:px-14">
        Edit Profile
      </h1>

      <div className="flex flex-col gap-6 mt-6 items-center w-full">
        {/* Profile picture */}
        <div className="w-[100%] lg:w-[90%] py-6 px-3 bg-[#161D29] rounded-md border-[1px] border-[#2C333F]">
          <h1 className="mb-3 font-semibold text-lg">Change Profile Picture</h1>
          <button className="text-lg font-semibold mr-6 px-4 py-1 rounded-md bg-[#2C333F]">
            Select
          </button>
          <button className="bg-[#FFD60A] mt-3 text-black text-lg font-semibold mr-6 px-4 py-1 rounded-md">
            <div className="flex items-center space-x-2">
              <h1>Upload</h1>
              <IoCloudUploadOutline className="text-xl font-bold" />
            </div>
          </button>
        </div>

        {/* Profile Information */}
        <div className="w-[100%] lg:w-[90%] py-6 px-3 bg-[#161D29] rounded-md border-[1px] border-[#2C333F]">
          <h1 className="mb-3 font-semibold text-lg">Profile Information</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* first Name */}
            <div className="flex flex-col">
              <label className="mb-1">First Name</label>
              <input
                type="text"
                placeholder={data?.firstName || ""}
                onChange={(e) => setFirstName(e.target.value)}
                className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="mb-1">Last Name</label>
              <input
                type="text"
                placeholder={data?.lastName || ""}
                onChange={(e) => setLastName(e.target.value)}
                className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
              />
            </div>

            {/* Contact NUmber */}
            <div className="flex flex-col">
              <label className="mb-1">Contact Number</label>
              <input
                type="text"
                placeholder={data?.phoneNumber || "Enter Contact Number"}
                onChange={(e) => setContactNumber(e.target.value)}
                className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label className="mb-1">Gender</label>
              <select
                placeholder={data?.gender || "Gender"}
                onChange={(e) => setGender(e.target.value)}
                className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label className="mb-1">Location</label>
              <input
                type="text"
                placeholder={data?.location || "Enter Your Location"}
                onChange={(e) => setLocation(e.target.value)}
                className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
              />
            </div>

            {/* date of birth */}
            <div className="flex flex-col">
              <label className="mb-1">Date of Birth</label>
              <input
                type="text"
                placeholder={data?.DOB || "dd-mm-yyyy"}
                onChange={(e) => setDob(e.target.value)}
                className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
              />
            </div>

            {/* About */}
            <div className="flex flex-col">
              <label className="mb-1">About</label>
              <textarea
                placeholder={data?.headline || "Enter Headline"}
                onChange={(e) => setAbout(e.target.value)}
                className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
              />
            </div>

            <div>
              {/* bio */}
              <div className="flex flex-col">
                <label className="mb-1">Bio</label>
                <input
                  type="text"
                  placeholder={data?.bio || "Enter your bio"}
                  onChange={(e) => setbio(e.target.value)}
                  className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
                />
              </div>
              {/* save cancle button */}
              <div className="flex justify-end gap-4 mt-6 font-semibold">
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md">
                  Cancel
                </button>
                <button
                  onClick={() => {
                    updateDetails();
                  }}
                  className="bg-[#FFD60A] text-black px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="w-[100%] lg:w-[90%] py-6 px-3 bg-[#161D29] rounded-md border-[1px] border-[#2C333F]">
          <h1 className="mb-3 font-semibold text-lg">Password</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col relative">
              <label className="mb-1">Current Password</label>
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
              />
              <button
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-10 text-xl"
              >
                {showCurrentPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
            <div className="flex flex-col relative">
              <label className="mb-1">New Password</label>
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter New Password"
                className="px-4 py-2 bg-[#2C333F] text-white rounded-md"
              />
              <button
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-10 text-xl"
              >
                {showNewPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md">
              Cancel
            </button>
            <button className="bg-[#FFD60A] text-black px-4 py-2 rounded-md">
              Update
            </button>
          </div>
        </div>

        {/* Delete Account */}
        <div className="w-[100%] lg:w-[90%] py-6 px-3 bg-[#610316] opacity-70 border-[#691432] border-[1px] rounded-md">
          <div className="flex space-x-6 items-center">
            <IoTrashBinSharp className="text-[120px] opacity-100 bg-[#691432] text-red-400 px-2 rounded-full" />
            <div>
              <h1 className="mb-3 font-semibold text-lg text-white">
                Delete Account
              </h1>
              <p className="mb-4 lg:w-[60%]">
                Would you like to delete your account? This account may contain
                Paid Courses. Deleting your account is permanent and will remove
                all the content associated with it.
              </p>
              <button className="font-semibold text-red-400 italic">
                I want to delete my account.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
