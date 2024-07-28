import React, { useEffect, useState } from "react";
import DashboardSidebar from "../sections/DashboardSidebar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Course from "./Course";
import Settings from "./Settings";
import Cart from "./Cart";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    //console.log("token", token);

    if (token) {
      const response = axios
        .get("http://localhost:3000/api/v1/userDetails", {
          headers: {
            authorization: `${token}`,
          },
        })
        .then((response) => {
          console.log("Passed");
          setData(response.data.data);
        })
        .catch((e) => {
          console.log("User not verified! Please signup", e);
          navigate("/signup");
        });
    } else {
      console.log("No token found! Please login");
      navigate("/login");
    }
  }, []);

  const profile =
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/profile";
  const course = location.pathname === "/dashboard/course";
  const settings = location.pathname === "/dashboard/settings";
  const cart = location.pathname === "/dashboard/cart";

  return (
    <div className="flex space-x-[80px] sm:space-x-[200px]">
      <DashboardSidebar />
      {profile && <Profile data={data} setData={setData} />}
      {course && localStorage.getItem("role") == "Student" && <Course />}
      {course && localStorage.getItem("Instructor") == "Student" && <Course />}
      {settings && <Settings data={data} setData={setData} />}
      {cart && <Cart />}
    </div>
  );
};

export default Dashboard;
