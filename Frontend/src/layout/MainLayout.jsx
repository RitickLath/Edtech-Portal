import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Course from "../pages/Course";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import DashboardSidebar from "../sections/DashboardSidebar";
import Settings from "../pages/Settings";
import Cart from "../pages/Cart";

const MainLayout = () => {
  const location = useLocation();
  const showFooter =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/contact";

  const showSideBar = location.pathname.startsWith("/dashboard");

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="pt-[3.5rem] bg-[#000814] min-h-screen">
        <div
          className={`flex ${
            showSideBar ? "space-x-[80px] sm:space-x-[200px]" : ""
          }`}
        >
          {showSideBar && <DashboardSidebar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* signup and login */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* Dashboard */}
            <Route path="/dashboard" element={<Profile />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/course" element={<Course />} />
            <Route path="/dashboard/cart" element={<Cart />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Routes>
        </div>
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
