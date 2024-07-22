import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="w-full h-full min-h-screen py-12 bg-[#000814] text-white md:flex md:justify-between px-10 lg:px-14">
      <Hero />
    </div>
  );
};

export default Home;
