import logo from "../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { MdClear } from "react-icons/md";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="components flex justify-between   items-center bg-white shadow-md z-10">
        <div className="flex items-text-[#bfbfbf]  gap-4 ">
          <img src={logo} alt="Logo" />

          <a href="#" className="hover:text-black hidden md:block">
            Features
          </a>
          <a href="#" className="hover:text-black  hidden md:block">
            {" "}
            Pricing{" "}
          </a>

          <a href="#" className="hover:text-black  hidden md:block">
            Resources
          </a>
        </div>
        <div className="flex items-center gap-4 p-4 ">
          <button className="text-[#bfbfbf] cursor-pointer  hidden md:block ">
            Login
          </button>
          <button className=" w-[100px] h-[40px] hover:bg-[#92c7c1]  cursor-pointer rounded-3xl bg-[#40b3a6] text-white  hidden md:block">
            Sign Up
          </button>
        </div>
        {!isOpen ? (
          <IoMenu
            size={30}
            className="md:hidden "
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <MdClear
            size={30}
            className={`md:hidden ${
              isOpen ? "block" : "hidden"
            } cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        {isOpen && (
          <div className="absolute top-16 right-0 bg-[#3b3054ff] text-center p-5 font-semibold  text-gray-300 shadow-lg w-full md:hidden  ">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Features
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Pricing
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 mb-3">
              Resources
            </a>
            <hr className="text-gray-500 py-1.5    " />
            <div className="flex flex-col items-center">
              <button className="block px-4 py-2 text-[#bfbfbf] hover:bg-gray-100">
                Login
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button className="block  w-[70%]   h-[40px] hover:bg-[#c4ede9] rounded-3xl bg-[#30cdba] text-white">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
