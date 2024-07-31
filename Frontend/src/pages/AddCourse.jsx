import React, { useRef, useState } from "react";
import axios from "axios";
import CourseBuilder from "../sections/CourseBuilder";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseBenefits, setCourseBenefits] = useState("");
  const [courseRequirements, setCourseRequirements] = useState([]);
  const [page, setpage] = useState(1);
  const ref = useRef();
  const checkbox = useRef();
  const [time, setTime] = useState("");
  const [section, setSection] = useState([]);
  const [length, setlength] = useState(0);

  const addItem = () => {
    if (ref.current.value) {
      setCourseRequirements([...courseRequirements, ref.current.value]);
      ref.current.value = "";
    }
  };

  const removeItem = (c) => {
    setCourseRequirements((prevItems) =>
      prevItems.filter((item) => item !== c)
    );
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/addCourse",
        {
          id: localStorage.getItem("id"),
          title: courseTitle,
          description: courseDescription,
          price: coursePrice,
          category: courseCategory,
          benefits: courseBenefits,
          prerequisite: courseRequirements,
          sections: section,
          time,
        }
      );

      if (response.data.success) {
        alert("Course created successfully!");
        // Optionally, reset the form or redirect
      } else {
        alert(response.data.message || "Failed to create course.");
      }
    } catch (error) {
      console.error("There was an error creating the course:", error);
      alert("An error occurred while creating the course.");
    }
  };

  return (
    <div className="w-full relative flex justify-between space-x-3 bg-[#000814] px-12 py-16 text-white">
      {/* PART-1 */}
      {page === 1 && (
        <div className="max-w-2xl border-[#161D29] p-4">
          <h1 className="text-2xl font-bold mb-8">Add a New Course</h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Course Title */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2">Course Title *</label>
              <input
                type="text"
                placeholder="Enter Course Title"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
                value={courseTitle}
                required
                onChange={(e) => setCourseTitle(e.target.value)}
              />
            </div>

            {/* Course Short Description */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2">Course Short Description *</label>
              <textarea
                placeholder="Enter Description"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
                rows="3"
                value={courseDescription}
                required
                onChange={(e) => setCourseDescription(e.target.value)}
              />
            </div>

            {/* Course Price */}
            <div>
              <label className="block mb-2">Course Price *</label>
              <input
                type="text"
                placeholder="Enter Course Price"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
                value={coursePrice}
                required
                onChange={(e) => setCoursePrice(e.target.value)}
              />
            </div>

            {/* Course Time */}
            <div>
              <label className="block mb-2">Course Duration *</label>
              <input
                type="text"
                placeholder="Enter Course Duration (In hour.)"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
                value={time}
                required
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            {/* Course Category */}
            <div>
              <label className="block mb-2">Course Category *</label>
              <select
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
                required
                value={courseCategory}
                onChange={(e) => setCourseCategory(e.target.value)}
              >
                <option disabled value="">
                  Choose a Category
                </option>
                <option>Python</option>
                <option>Web Development</option>
                <option>Android Development</option>
                <option>Cloud Computing</option>
                <option>Devops</option>
                <option>Artificial Intelligence</option>
                <option>Machine Learning</option>
                <option>Cyber Security</option>
                <option>Data Structure and Algorithms</option>
              </select>
            </div>

            {/* Benefits of the course */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2">Benefits of the course *</label>
              <textarea
                placeholder="Enter benefits of the course"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
                rows="3"
                value={courseBenefits}
                required
                onChange={(e) => setCourseBenefits(e.target.value)}
              />
            </div>

            {/* Requirements/Instructions */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2">Prerequisite *</label>
              <input
                ref={ref}
                type="text"
                placeholder="Enter Prerequisite of course"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem();
                }}
                className="font-semibold text-yellow-400"
              >
                Add
              </button>
              <div>
                {courseRequirements.map((c, i) => (
                  <div className="flex items-center space-x-4" key={i}>
                    <h1 className="text-white">{c}</h1>
                    <button
                      className="text-xs"
                      onClick={() => {
                        removeItem(c);
                      }}
                    >
                      clear
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 flex justify-end">
              <button
                onClick={() => {
                  setpage(2);
                }}
                className="bg-yellow-500 text-xl font-semibold text-black px-6 py-2 rounded"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {/* PART-2 */}
      {page === 2 && (
        <CourseBuilder
          page={page}
          setpage={setpage}
          section={section}
          setSection={setSection}
          length={length}
          setlength={setlength}
        />
      )}

      {page === 3 && (
        <div className="w-full mt-20 bg-[#161D29] px-12 py-12 text-white rounded-md">
          <h1 className="text-2xl font-bold mb-4">Publish Settings</h1>

          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              ref={checkbox}
              placeholder="Add a section to build your course"
              className="p-2 rounded bg-[#2C333F] border-gray-700 outline-none"
            />
            <label className="block">
              Make this course as publish{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="flex justify-end space-x-6 font-semibold mt-4">
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded"
              onClick={() => {
                setpage(2);
              }}
            >
              Back
            </button>
            <button
              className="bg-yellow-500 text-black px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* tips div */}
      <div className="hidden lg:flex w-full -mt-4 max-w-[400px] max-h-[400px]">
        <div className="fixed border-[1px] rounded-md bg-[#1F2937] border-[#161D29] text-[#F1F2FF] max-w-[400px] max-h-[400px]">
          <div className="p-5">
            <h1 className="text-xl font-semibold text-white pb-5">
              ⚡Course Upload Tips
            </h1>
            <ul className="list-disc px-4">
              <li className="mb-2 text-sm">
                Set the Course price option or make it free
              </li>
              <li className="mb-2 text-sm">
                Standard size for the thumbnail is 1024x576
              </li>
              <li className="mb-2 text-sm">
                Video section controls the course overview video
              </li>
              <li className="mb-2 text-sm">
                Course Builder is where you create & organize a course. Make
              </li>
              <li className="mb-2 text-sm">
                Add Topics in the Course Builder section to create lessons,
                quizzes, and assignments.
              </li>
              <li className="mb-2 text-sm">
                Information from the Additional Data section shows up on the
                course single page.
              </li>
              <li className="mb-2 text-sm">
                Announcements to notify any important
              </li>
              <li className="mb-2 text-sm">
                Notes to all enrolled students at once.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
