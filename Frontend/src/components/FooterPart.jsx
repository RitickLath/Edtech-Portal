import React from "react";
import { Link } from "react-router-dom";

const FooterPart = ({ heading, arrayname }) => {
  return (
    <div>
      <h1 className="text-bold text-lg">{heading}</h1>
      <div>
        {arrayname.map((c, i) => (
          <h1 key={i}>
            <Link className="text-[#6E727F] hover:text-[#C5C7D4] mb-2">
              {c}
            </Link>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default FooterPart;
