import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseInfo = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/SingleCourse?id=${id}`
        );

        if (response?.data?.success) {
          setDetails(response?.data?.course);
        } else {
          console.log("Can't fetch course details");
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
    getDetails();
  }, [id]);

  if (!details) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side content */}
        <div className="lg:col-span-1 space-y-8 px-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{details?.title}</h1>
            <p className="text-lg text-gray-300 mb-4">{details?.description}</p>

            <div className="flex items-center mb-4">
              <span className="text-yellow-400 font-semibold mr-2">4.8</span>
              <span className="text-gray-400">
                ({details?.enrolledUsers?.length} ratings) •{" "}
                {details?.enrolledUsers?.length} students
              </span>
            </div>

            <p className="mb-4">
              Created by{" "}
              <span className="text-blue-400">{details.instructorName}</span>
            </p>

            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-4">
                Last updated {new Date(details.updatedAt).toLocaleDateString()}
              </span>
              <span className="mr-4">English</span>
              <span>English [Auto]</span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.lecture.map((lec, index) => (
                <li key={index} className="flex items-center w-[300px]">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <span>{`${lec.title}: ${lec.description}`}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              This course includes:
            </h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">Duration: {details.time}</li>
              <li className="mb-2">Full Lifetime Access</li>
              <li className="mb-2">Access on Mobile and TV</li>
            </ul>
          </div>
        </div>

        {/* Right side content */}
        <div className="lg:col-span-1 space-y-8 px-6 lg:px-0">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              loading="lazy"
              src={details.imageUrl}
              alt={details.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-3xl font-bold text-yellow-400 mb-4">
              ${details.price}
            </p>
            <button className="w-full bg-purple-600 text-white py-3 rounded-md text-lg font-semibold mb-4">
              Add to cart
            </button>
            <p className="text-center text-sm text-gray-400 mb-4">
              30-Day Money-Back Guarantee
            </p>
          </div>

          <div className="lg:hidden bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              This course includes:
            </h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">Duration: {details.time}</li>
              <li className="mb-2">Full Lifetime Access</li>
              <li className="mb-2">Access on Mobile and TV</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
