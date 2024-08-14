// Profile.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdCreate } from "react-icons/io";

const Profile = ({ data, setData }) => {
  useEffect(() => {}, [data]);
  return (
    <div className="w-full bg-[#000814] px-4 py-16 md:px-12 text-white">
      <h1 className="text-3xl sm:text-4xl font-semibold">My Profile</h1>

      <div className="w-full mt-8 space-y-6">
        {/* Profile Header */}
        <ProfileSection>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-semibold">
                AS
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {data?.firstName + " " + data?.lastName}
                  <p className="text-gray-400 text-xs sm:text-base">
                    {data?.email}
                  </p>
                </h2>
              </div>
            </div>
          </div>
        </ProfileSection>

        {/* About Section */}
        <ProfileSection title="About">
          <p className="text-gray-400">
            {data?.bio || "Write Something About Yourself"}
          </p>
        </ProfileSection>
        <EditButton path="/dashboard/settings" />

        {/* Personal Details Section */}
        <ProfileSection title="Personal Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ProfileField label="First Name" value={data?.firstName} />
            <ProfileField label="Last Name" value={data?.lastName} />
            <ProfileField label="Email" value={data?.email} />
            <ProfileField label="Phone Number" value={data?.phoneNumber} />
            <ProfileField label="Gender" value={data?.gender} />
            <ProfileField label="Location" value={data?.location} />
            <ProfileField label="Date Of Birth" value={data?.DOB} />
            <ProfileField label="Headline" value={data?.headline} />
            <ProfileField label="Bio" value={data?.bio} />
          </div>
        </ProfileSection>
        <EditButton path="/dashboard/settings" />
      </div>
    </div>
  );
};

export default Profile;

// EditButton.js
const EditButton = ({ path }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="bg-[#FFD60A] font-semibold text-black px-4 py-2 rounded-md flex items-center space-x-2"
    >
      <span>Edit</span> <IoMdCreate />
    </button>
  );
};

// ProfileSection.js

const ProfileSection = ({ title, children }) => {
  return (
    <div className="w-full bg-[#161D29] p-3 py-8 md:px-8 rounded-md">
      {title && <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>}
      {children}
    </div>
  );
};

// ProfileField.js

const ProfileField = ({ label, value }) => {
  return (
    <div>
      <h3 className="text-md font-semibold">{label}</h3>
      <p className="text-gray-400 text-sm sm:text-base">
        {value || `Add ${label}`}
      </p>
    </div>
  );
};
