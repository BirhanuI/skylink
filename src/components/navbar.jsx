import { FaBars } from "react-icons/fa6";
import {AiOutlineClose} from 'react-icons/ai'
import logo from "./../assets/skylink.svg";
import { useState } from "react";
const Navbar = () => {
  const toggled = () => {
    setToggle(!toggle);
  };
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    { title: "Home", link: "home" },
    { title: "Our Service", link: "service" },
    { title: "Our Solution", link: "solution" },
    { title: "Training", link: "training" },
    { title: "Events", link: "events" },
    { title: "About us", link: "about" },
  ];
  return (
    <div className="flex justify-around lg:justify-between items-center">
      <img src={logo} alt="skylink logo" className="w-40 ml-5 py-1" />
      <ul className="lg:flex hidden text-blue-400 font-medium items-center mr-10">
        {navLinks.map((link,index) => (
          <li key={index} className="px-7 cursor-pointer">{link.title}</li>
        ))}
      </ul>
      <FaBars
        onClick={toggled}
        className="text-4xl mr-10 lg:hidden cursor-pointer hover:text-blue-400 duration-200"
      />
      <div
        className={`fixed bg-black opacity-50 top-0 bottom-0 ${toggle?"left-0":"left-full"} duration-700 right-0`}
      ></div>

      {/* 
      *
      *
      * 
      * Menu Bar
      * 
      * 
      *  */}
      <div className={`fixed w-96 border-l-4 bg-gray-100 right-0 top-0 bottom-0 ${toggle?"mr-0":"-right-96"} duration-500`}>
        <div onClick={toggled} className="flex justify-around items-center mt-5 border-b-2 pb-5"><img src={logo} alt="skylogo" className="w-28"/><AiOutlineClose onClick={toggled} className="text-3xl cursor-pointer hover:text-blue-400"/></div>
        <ul className="flex flex-col justify-center font-medium">
          {navLinks.map((link,index) => (
            <li key={index} onClick={toggled} className="px-7 text-center w-full p-5 text-lg font-medium hover:bg-blue-400 hover:text-white duration-200 cursor-pointer">{link.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
