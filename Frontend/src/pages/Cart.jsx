import React from "react";

const Cart = () => {
  return (
    <div className="w-full bg-[#000814] px-12 py-16 text-white">
      <h1 className="text-3xl sm:text-4xl font-semibold">Cart</h1>
      <h3 className="text-lg pt-12 text-[#AFB2BF] font-semibold">
        0 Courses in Cart
      </h3>
      <hr className="text-[#AFB2BF] mt-3" />
      <div className="flex justify-center text-[#AFB2BF]">
        <h1 className="text-3xl pt-8 font-semibold">Your Cart is Empty</h1>
      </div>
    </div>
  );
};

export default Cart;
