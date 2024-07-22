import React, { useState } from "react";

const CatalogCard = ({ h1, p }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative w-[300px] h-[300px]">
      {/* YELLOW DIV */}
      {isActive && (
        <div className="absolute w-[300px] h-[300px] inset-0 top-6 left-6 bg-yellow-500 z-10"></div>
      )}

      {/* MAIN TEXT DIV */}
      <div
        onClick={() => setIsActive(!isActive)}
        className={`absolute p-5 w-[300px] h-[300px] z-20 flex flex-col justify-center ${
          isActive ? "bg-white" : "bg-[#161D29]"
        }`}
      >
        {/* COURSE HEADING */}
        <h1
          className={`text-2xl font-semibold ${
            isActive ? "text-black" : "text-white"
          }`}
        >
          {h1}
        </h1>

        {/* COURSE DESCRIPTION */}
        <p
          className={`pt-1 font-normal ${
            isActive ? "text-[#6E727F]" : "text-[#97a2c9]"
          }`}
        >
          {p}
        </p>
      </div>
    </div>
  );
};

export default CatalogCard;
