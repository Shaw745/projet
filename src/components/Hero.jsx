import React from "react";
import working from "../assets/working.svg";

const Hero = () => {
  return (
    <div className=" components flex  flex-col-reverse md:flex-row items-center md:justify-between my-10 gap-5">
      <div>
        <h2 className=" md:text-start text-center font-[700] text-[30px] md:text-[45px] text-[#262226] leading-9 md:leading-12 ">
          More than just <br />
          shorter links
        </h2>
        <p className="text-[#8a8686] md:text-start text-center text-[16px] md:text-[18px] leading-6 md:leading-8 mt-4 md:w-[70%] w-full">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>{" "}
        <div className="flex items-center justify-center md:justify-start">
          <button className="  w-[150px] h-[50px] cursor-pointer rounded-3xl hover:bg-[#92c7c1] bg-[#40b3a6] text-white items-center flex justify-center mt-6">
            Get Started
          </button>
        </div>
      </div>
      <img src={working} alt=" person" className="md:w-[50%] w-full " />
    </div>
  );
};

export default Hero;
