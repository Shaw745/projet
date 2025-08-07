import React from 'react'
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";


const Footer = () => {
  return (
    <div className="bg-gray-900 w-full  p-15 h-full">
      {" "}
      <div class="flex flex-col gap-[20px]  md:flex-row justify-between">
        <h1 class="text-gray-300 font-bold text-[34px] text-center">Shortly</h1>
        <div class="flex flex-col gap-[10px] text-gray-500 font-bold items-center ">
          <h1 class="text-white text-xl font-bold">Feature </h1>
          <a href="#">Link Shortening </a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>
        <div class="flex flex-col gap-[10px] text-center text-gray-500 font-bold">
          <h1 class="text-white text-xl font-bold">Resources</h1>
          <a href="">Blog </a>
          <a href="">Developers</a>
          <a href="">Support</a>
        </div>
        <div class="flex flex-col  gap-[10px] text-center text-gray-500 font-bold">
          <h1 class="text-white text-xl font-bold">Find out more</h1>
          <a href="#">About </a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </div>{" "}
      <div>
        <div
          className="flex justify-center gap-6 mt-8 text-gray-500  "
          color="#bfbfbf"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pinterest} alt="Pinterest" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div class="text-center text-gray-500 pt-10 mt-[20px]">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Lisa Shaw</a>.
      </div>
    </div>
  );
}

export default Footer