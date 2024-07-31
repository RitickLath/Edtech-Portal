import { useRef } from "react";

const CourseBuilder = ({
  page,
  setpage,
  length,
  setlength,
  section,
  setSection,
}) => {
  const ref = useRef();

  return (
    <div className="w-full bg-[#161D29] mt-12 px-12 py-12 text-white border-[1px] border-[#32313D] rounded-md">
      <h1 className="text-2xl font-bold mb-4">Course Builder</h1>

      <div className="mb-6">
        <label className="block mb-2">
          Section Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Add a section to build your course"
          ref={ref}
          className="w-full p-2 rounded bg-[#2C333F] border border-gray-700 outline-none"
        />
      </div>

      <button
        className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded mb-6 font-semibold"
        onClick={() => {
          setlength((prev) => prev + 1);
          setSection((prev) => [...prev, ref.current.value]);
        }}
      >
        <span className="mr-2">Create Section</span>
        <span className="text-lg">+</span>
      </button>

      {/*  */}

      {Array(length)
        .fill(null)
        .map((i, k) => (
          <h1
            className="w-full my-2 p-2 rounded bg-gray-800 border border-gray-700 outline-none"
            key={k}
          >
            {section[k]}
          </h1>
        ))}

      {/*  */}
      <div className="flex font-semibold justify-between">
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setpage(1);
          }}
        >
          Back
        </button>
        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded"
          onClick={() => {
            setpage(3);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseBuilder;
