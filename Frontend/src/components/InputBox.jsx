import React from "react";

const InputBox = ({ label, placeholder, value, setvalue, type }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <br />
      <input
        className="w-full outline-none sm:min-w-[235px] py-3 rounded-md shadow-md bg-[#2C333F] my-2 px-3 "
        onChange={(e) => setvalue(e.target.value)}
        type={type}
        name=""
        id=""
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputBox;
