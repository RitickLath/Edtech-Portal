import React, { useState } from "react";
import {
  c1,
  Cheading,
  Cheading1,
  Cparagraph,
  c2,
  c3,
  c4,
  c5,
} from "../constants/textConstants";
import CatalogCard from "../components/CatalogCard";

const Catalog = () => {
  const [activebtn, setActivebtn] = useState({ index: 1, h: c1 });

  return (
    <div className="w-full flex justify-center py-12 pb-28">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold">
          {Cheading}{" "}
          <span className="font-extrabold neon-blue-gradient">
            {" "}
            {Cheading1}
          </span>
        </h1>
        <h1 className="sm:text-lg md:text-lg pt-2 sm:px-7 font-medium text-[#DBDDEA] lg:px-24 text-left">
          {Cparagraph}
        </h1>

        {/* NAVIGATOR OF COURSE */}
        <div className="hidden mt-6 px-8 lg:flex lg:items-center lg:justify-between w-[80%] rounded-full bg-[#161D29] h-[50px]">
          <Button
            activebtn={activebtn}
            setActivebtn={setActivebtn}
            index={1}
            c={c1}
            text={"Free"}
          />
          <Button
            activebtn={activebtn}
            setActivebtn={setActivebtn}
            index={2}
            c={c2}
            text={"New to coding"}
          />
          <Button
            activebtn={activebtn}
            setActivebtn={setActivebtn}
            index={3}
            c={c3}
            text={"Most popular"}
          />
          <Button
            activebtn={activebtn}
            setActivebtn={setActivebtn}
            index={4}
            c={c4}
            text={"Skills paths"}
          />
          <Button
            activebtn={activebtn}
            setActivebtn={setActivebtn}
            index={5}
            c={c5}
            text={"Career paths"}
          />
        </div>

        {/* Catalogs */}
        <div className="w-full mt-12 grid place-items-center gap-10 lg:grid-cols-3 md:grid-cols-2 md:gap-12 lg:gap-12">
          {activebtn.h.length > 0 && (
            <CatalogCard active={true} h1={activebtn.h[0]} p={activebtn.h[1]} />
          )}
          {activebtn.h.length > 2 && (
            <CatalogCard
              active={false}
              h1={activebtn.h[2]}
              p={activebtn.h[3]}
            />
          )}
          {activebtn.h.length > 4 && (
            <CatalogCard
              active={false}
              h1={activebtn.h[4]}
              p={activebtn.h[5]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Button = ({ activebtn, setActivebtn, index, c, text }) => {
  return (
    <button
      onClick={() => {
        setActivebtn({ index, h: c });
      }}
      className={`c-lg px-6 rounded-full font-semibold hover:bg-[#000814] h-[35px] ${
        activebtn.index === index ? "bg-[#000814]" : "bg-[#161D29]"
      }`}
    >
      {text}
    </button>
  );
};

export default Catalog;
