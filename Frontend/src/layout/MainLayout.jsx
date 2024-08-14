import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Verification from "../pages/Verification";
import Course from "../pages/Course";
import CourseInfo from "../pages/CourseInfo";

const MainLayout = () => {
  const location = useLocation();
  const showFooter =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/contact";

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="pt-[3.5rem] bg-[#000814] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<CourseInfo />} />

          {/* signup, login and otp verification */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Dashboard />} />
          <Route path="/dashboard/course" element={<Dashboard />} />
          <Route path="/dashboard/course/add-course" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<Dashboard />} />
          <Route path="/dashboard/cart" element={<Dashboard />} />
        </Routes>
      </div>

      {showFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);

export default App;
