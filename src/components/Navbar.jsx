import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Menu, X } from "react-feather";

const Navbar = () => {
  const authData = useSelector((state) => state.auth);

  let Links = [
    { name: "Rooms", link: "/" },
    { name: "Dining", link: "/#" },
    { name: "Offers", link: "/#" },
    { name: "Services & Facilities", link: "/#" },
    { name: "Meeting & Conference", link: "/about" },
  ];
  let [open, setOpen] = useState(false);

  console.log(authData);

  return (
    <div
      className=" max-w-[1400px] mx-auto w-full fixed align-center bg-black md:bg-transparent md:absolute top-0 left-[50%] transform translate-x-[-50%]"
      style={{ zIndex: "1000000" }}
    >
      <div className="md:flex items-center justify-between md:bg-transparent py-0 lg:px-10 px-7 md:px-3">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              style={{ width: "150px", height: "113px" }}
              src="/logo.png"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {/* {open ? <XMarkIcon /> : <Bars3BottomRightIcon />} */}
          {open ? <X /> : <Menu />}
        </div>
        {/* linke items */}
        <div className="gap-[6px]">
          <ul
            className={`h-[40px] gap-[13px] md:flex md:bg-transparent bg-white md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-8 pl-9 transition-all duration-500 ease-in ${
              open ? "top-18" : "top-[-490px]"
            }`}
          >
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Contact Us
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Gallery
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Location
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Language
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7 border h-full"></li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Currency
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Sign In/Up Now
              </a>
            </li>
          </ul>
          <ul
            className={`gap-[10px] md:flex md:bg-transparent bg-white md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-18" : "top-[-490px]"
            }`}
          >
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Rooms
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Dining
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Offers
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Services & Facilities
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Meeting & Conference
              </a>
            </li>
            <li className="md:ml-8 md:my-0 my-7">
              <a
                href="#"
                className="md:text-white text-black hover:text-blue-400 duration-500"
              >
                Wedding
              </a>
            </li>
            {/* <button className="btn bg-blue-600 text-white md:ml-8 px-3 py-1 rounded duration-500 md:static"> */}
            <a href="/contact">
              <button
                type="button"
                style={{
                  background: "#3A7289",
                  width: "160px",
                  height: "45px",
                  fontSize: "18px",
                }}
                className="text-white md:ml-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Book Now
              </button>
            </a>
            {/* </button> */}
          </ul>
        </div>

        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
