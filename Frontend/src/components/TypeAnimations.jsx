import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimations = ({ code1, color, count }) => {
  return (
    <div className="flex space-x-4 px-6 pt-7 text-lg mb-6 textDark font-semibold">
      <div>
        {Array.from({ length: count }, (_, i) => (
          <h1 key={i}>{i + 1}.</h1>
        ))}
      </div>
      <TypeAnimation
        style={{
          whiteSpace: "pre-line",
          height: "195px",
          display: "block",
          color: color,
          fontWeight: "bold",
        }}
        sequence={code1}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeAnimations;
