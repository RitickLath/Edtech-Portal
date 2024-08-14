import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/courses"
        );

        if (response?.data?.success) {
          setCourses(response?.data?.courses);
        } else {
          alert("Courses Not Fetched / No Courses Available");
        }
      } catch (e) {
        console.log(e);
      }
    };
    getAllCourses();
  }, []);

  return (
    <div className="w-full bg-[#000814] px-12 py-16 text-white">
      <h1 className="text-4xl font-bold mb-4">Available Courses</h1>
      <h2 className="text-xl font-semibold mb-8 text-gray-400">
        Browse our wide selection of courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              loading="lazy"
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
            <p className="text-sm text-gray-400 mb-4">
              {course.category} - {course.time}
            </p>
            <p className="text-md font-semibold mb-2">
              Instructor: {course.instructorName}
            </p>
            <p className="text-lg font-bold text-yellow-400 mb-4">
              ${course.price}
            </p>
            <button
              onClick={() => {
                navigate(`/course/${course?._id}`);
              }}
              className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold w-full"
            >
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
