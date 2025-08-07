import React from "react";

const Image = () => {
  return (
    <div className="bg-gray-700 h-screen max-h-[255px] w-full ">
      <div className="section4 h-screen max-h-[300px] w-full -translate-y-6 flex items-center justify-center">
        <div className="w-full mx-auto max-w-[500px] text-center">
          <h2 className="text-white text-2xl md:text-4xl mb-4">
            Boost your links today
          </h2>
          <button className="bg-[#40b3a6] text-white rounded-3xl w-[150px] h-[50px] cursor-pointer  hover:bg-[#a1e6de]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Image;
