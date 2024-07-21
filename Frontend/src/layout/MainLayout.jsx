import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Course from "../pages/Course";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainLayout;
