import TypeAnimations from "../components/TypeAnimations";
import { code1, code2 } from "../constants/textConstants";
import { useNavigate } from "react-router-dom";

const Highlight = ({ btn1, btn2, heading, neonHeading, paragraph, left }) => {
  const navigate = useNavigate();
  return (
    <div className=" lg:flex">
      {!left && (
        <div className="mt-12 w-full lg:w-[50%] border-[2px] border-[#6e727f] rounded-md">
          <TypeAnimations code1={code2} color={"#FFFFFF"} count={15} />
        </div>
      )}

      <div className="text-center mt-16">
        <h1 className="text-2xl sm:text-4xl font-bold">
          {heading}{" "}
          <span className="font-extrabold neon-blue-gradient">
            {" "}
            {neonHeading}
          </span>
        </h1>
        <h1 className="sm:text-lg md:text-xl pt-4 sm:px-7 font-medium text-[#DBDDEA] lg:px-24 text-left">
          {paragraph}
        </h1>
        <div className="mt-10 w-full flex justify-center space-x-3">
          <button
            onClick={() => navigate("/signup")}
            className="py-2 px-4 bg-[#FFD60A] rounded-md text-black font-semibold shadow-md text-lg sm:text-xl hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
          >
            {btn1}
          </button>
          <button
            onClick={() => navigate("/login")}
            className="py-2 px-4 bg-[#161D29] rounded-md text-white font-semibold shadow-md text-lg sm:text-xl hover:transform transition-transform duration-200 ease-in-out hover:scale-95"
          >
            {btn2}
          </button>
        </div>
      </div>

      {left && (
        <div className="my-12 w-full lg:w-[45%] border-[2px] border-[#6e727f] rounded-md">
          <TypeAnimations code1={code1} color={"#FFD60A"} count={10} />
        </div>
      )}
    </div>
  );
};

export default Highlight;
