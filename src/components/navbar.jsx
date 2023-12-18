import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./../assets/skylink.svg";
import { useState } from "react";
import NavOurService from "./sub_components/nav_Our_service";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showEvents,setShowEvents]=useState(false);
  const toggled = () => {
    setToggle(!toggle);
  };
  const showService = (index)=>{
    if(index == 1){
    setToggle2(true);}
    else setToggle2(false)
  }
  const showEvent = (index)=>{
    if(index === 4){
      setShowEvents(true);}
      else setShowEvents(false);
  }
  const hideService = ()=>{
    setToggle2(false);
  }
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const navLinks = [
    { title: "Home", link: "/home" },
    { title: "Our Service", link: '#' },
    { title: "Our Solution", link: "/solutions" },
    { title: "Training", link: "/training" },
    { title: "What's new", link: "#" },
    { title: "About us", link: "/about" },
  ];
  const subnav=[
    {title:'News',link:'/news'},
    {title:'Events',link:'/events/expo'},
    {title:'Meweda Online',link:'/meweda/article'},
  ]
  return (
    <div className="" onMouseLeave={hideService}>
      <div className="flex justify-around lg:justify-between items-center">
        <img src={logo} alt="skylink logo" className="w-40 ml-5 py-1" />
        <ul className="lg:flex hidden text-blue-400 font-medium items-center mr-10">
          {navLinks.map((link, index) => (
            <Link to={link.link} className="relative active:text-blue-600 hover:text-blue-600"><li key={index} className="px-4 cursor-pointer"
            onMouseEnter={()=>{showService(index);showEvent(index)}}
            onMouseLeave={()=>{setShowEvents(false);}}

            
            >
              <div className={`${showEvents && index===4?'bloc':'hidden'} flex flex-col absolute rounded-lg z-50  mt-6 bg-blue-400`}>
                
                {subnav.map((item,index)=>(
                  <Link to={item.link} key={index} className="text-white py-2 px-5 duration-100 hover:text-blue-400 hover:bg-white">{item.title}</Link>
                ))}
              </div>
              {link.title}
            </li></Link>
          ))}
        </ul>
        <FaBars
          onClick={toggled}
          className="text-4xl mr-10 lg:hidden cursor-pointer hover:text-blue-400 duration-200"
        />
        <div
          className={`fixed z-40 bg-black opacity-50 top-0 bottom-0 ${
            toggle ? "left-0" : "left-full"
          } duration-700 right-0`}
        ></div>

        {/*
         *
         *
         *
         * Menu Bar
         *
         *
         *  */}
        <div
          className={`fixed z-50 w-96 border-l-4 bg-gray-100 right-0 top-0 bottom-0 ${
            toggle ? "mr-0" : "-mr-96"
          } duration-500`}
        >
          <div
            onClick={toggled}
            className="flex justify-around items-center mt-5 border-b-2 pb-5"
          >
            <img src={logo} alt="skylogo" className="w-28" />
            <AiOutlineClose
              onClick={toggled}
              className="text-3xl cursor-pointer hover:text-blue-400"
            />
          </div>
          <ul className="flex flex-col justify-center font-medium">
            {navLinks.map((link, index) => (
              <li
                key={index}
                onClick={toggled}
                className="px-7 text-center w-full p-5 text-lg font-medium hover:bg-blue-400 hover:text-white duration-200 cursor-pointer"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
        {/* 
      
      Our Service Card

      */}
      </div><div className={`${toggle2?"":"hidden"} duration-300 z-[100]`}>
      <NavOurService />
      </div>
    </div>
  );
};

export default Navbar;
