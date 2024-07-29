import React from "react";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full bg-[#000814] px-12 py-16 text-white">
      {/* HEADING AND BUTTON */}
      <div className="flex justify-between">
        <h1 className="text-2xl sm:text-4xl font-semibold">My Courses</h1>
        <button
          onClick={() => navigate("/dashboard/course/add-course")}
          className="text-black text-xl px-3 py-1 font-semibold rounded-sm bg-[#FFD60A]"
        >
          Add Course +
        </button>
      </div>

      {/* CORSE UPLOADED CONTENT */}
      <div className=" mt-12 border-[2px] rounded-sm border-[#161D29] text-[#c5c7b6]">
        <div className="p-4 flex font-semibold justify-between border-b-[1px] border-[#161D29]">
          <h1>COURSES</h1>
          <h1>DURATION</h1>
          <h1>PRICE</h1>
          <h1 className="hidden sm:flex">ACTIONS</h1>
        </div>
        <div className="flex justify-center py-12">
          <h1 className="text-2xl font-semibold">No Course Found</h1>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
