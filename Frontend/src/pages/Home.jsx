import React from "react";
import Hero from "../sections/Hero";
import Highlight from "../sections/Highlight";
import {
  btn1,
  btn11,
  btn12,
  btn2,
  btn21,
  btn22,
  heading,
  heading1,
  heading2,
  neonHeading,
  neonHeading1,
  neonHeading2,
  paragraph,
  paragraph1,
  paragraph2,
} from "../constants/textConstants";
import Catalog from "../sections/Catalog";

const Home = () => {
  return (
    <div className="w-full h-full mx-auto min-h-screen py-0 bg-[#000814] text-white px-6 lg:px-14">
      {/* HERO SECTION */}
      <div className="w- flex flex-col items-center">
        <Hero
          paragraph={paragraph}
          neonHeading={neonHeading}
          btn1={btn1}
          btn2={btn2}
          heading={heading}
        />

        <div className="mt-12 w-[90%] h-[400px] border-2"></div>
      </div>

      {/* HIGHLIGHT-1 */}
      <div>
        <Highlight
          paragraph={paragraph1}
          neonHeading={neonHeading1}
          btn1={btn11}
          btn2={btn12}
          heading={heading1}
          left={true}
        />
      </div>

      {/* HIGHLIGHT-2 */}
      <div className="hidden sm:flex md:flex lg:flex">
        <Highlight
          paragraph={paragraph2}
          neonHeading={neonHeading2}
          btn1={btn21}
          btn2={btn22}
          heading={heading2}
          left={false}
        />
      </div>

      {/* HIGHLIGHT-2 */}

      {/* <div className="flex sm:flex md:flex lg:flex">
        <Highlight
          paragraph={paragraph1}
          neonHeading={neonHeading1}
          btn1={btn11}
          btn2={btn12}
          heading={heading1}
          left={false}
        />
      </div> */}

      {/* CATALOG */}
      <Catalog />
    </div>
  );
};

export default Home;
