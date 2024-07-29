import React, { useState } from "react";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [tags, setTags] = useState("");
  const [courseThumbnail, setCourseThumbnail] = useState(null);
  const [courseBenefits, setCourseBenefits] = useState("");
  const [courseRequirements, setCourseRequirements] = useState("");

  return (
    <div className="w-full relative flex justify-between space-x-3 bg-[#000814] px-12 py-16 text-white">
      <div className="max-w-2xl">
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
              onChange={(e) => setCoursePrice(e.target.value)}
            />
          </div>

          {/* Course Category */}
          <div>
            <label className="block mb-2">Course Category *</label>
            <select
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
              placeholder="Choose a Category"
              onChange={(e) => setCourseCategory(e.target.value)}
            >
              <option disabled>Choose a Category</option>
              <option>Python</option>
              <option>Web Development</option>
              <option>Android Development</option>
              <option>Cloud Computing</option>
              <option>Devops</option>
              <option>Artificial Intelligence</option>
              <option>Machine Learning</option>
              <option>Cyper Security</option>
              <option>Data Structure and Algorithms</option>
            </select>
          </div>

          {/* Tags */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2">Tags *</label>
            <input
              type="text"
              placeholder="Enter Tags and press Enter"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          {/* Course Thumbnail */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2">Course Thumbnail *</label>
            <div className="w-full p-8 border-dashed border-2 border-gray-700 flex items-center justify-center bg-gray-800 rounded">
              <span className="text-center">
                Drag and drop an image, or{" "}
                <a href="#" className="text-blue-500">
                  Browse
                </a>{" "}
                a file
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setCourseThumbnail(e.target.files[0])}
              />
            </div>
          </div>

          {/* Benefits of the course */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2">Benefits of the course *</label>
            <textarea
              placeholder="Enter benefits of the course"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
              rows="3"
              value={courseBenefits}
              onChange={(e) => setCourseBenefits(e.target.value)}
            />
          </div>

          {/* Requirements/Instructions */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2">Requirements/Instructions *</label>
            <textarea
              placeholder="Enter requirements or instructions"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 outline-none"
              rows="3"
              value={courseRequirements}
              onChange={(e) => setCourseRequirements(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 flex justify-end">
            <button
              onSubmit={() => {}}
              className="bg-yellow-500 text-black px-6 py-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>

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
