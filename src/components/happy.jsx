import { AiOutlineFolderAdd } from "react-icons/ai";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
const Happy = () => {
  const ref = useRef(null);
  const [isVisible,setIsVisible] = useState(false);
  useEffect(()=>{
    const textObserver = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting)setIsVisible(true)
    },{root:null,rootMargin:"-300px"});
    textObserver.observe(ref.current)
  },[])
  const data = [
    { icon: <FaRegFaceSmile />, no: "30", text: "Happy Clients" },
    { icon: <AiOutlineFolderAdd />, no: "12", text: "Finished Projects" },
    { icon: <FaUsers />, no: "6", text: "Experienced Experts" },
  ];
  return (
    <div className="flex justify-around flex-wrap bg-gradient-to-b from-blue-50 to-gray-100" ref={ref}>
      {data.map((data , index) => (
        <div key={index} className={` flex items-center drop-shadow-2 p-10 justify-center transform origin-left duration-500 ${isVisible?"":"-rotate-45 opacity-0"}`}>
          <i className="text-3xl lg:text-6xl flex items-start">{data.icon}</i>
          <p className="text-xl xl:text-3xl flex flex-col ml-5"><span className="font-bold text-2xl xl:text-4xl drop-shadow-xl">{data.no}+</span><span>{data.text}</span></p>
        </div>
      ))}
    </div>
  );
};

export default Happy;
