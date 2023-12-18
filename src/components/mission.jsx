import { useEffect, useRef, useState } from "react";
import mission from "./../assets/mission.png";
import value from "./../assets/value.png";
import vision from "./../assets/vision.png";
const Mission = () => {
  const data = [
    {
      icon: vision,
      title: "Vision",
      discription:
        "Our Vision is to be the largest internationally recognized information and communication technology in Ethiopia and East Africa.",
    },
    {
      icon: mission,
      title: "Mission",
      discription:
        "Our Mission is to provide ICT based problem-solving services to individuals, institutions and government organizations and in Ethiopia and abroad.",
    },
    {
      icon: value,
      title: "Value",
      discription: (
        <div>
          <li>Integrity</li>
          <li>Commitment</li>
          <li>Passion of Excellence</li>
          <li>Continuous Learning</li>
          <li>Creative and Innovation</li>
        </div>
      ),
    },
  ];
  const ref = useRef(null);
  const [isVisible,setIsVisible] = useState(false);
  useEffect(()=>{
    const textObserver = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting)setIsVisible(true)
    },{root:null,rootMargin:"-300px"});
    textObserver.observe(ref.current)
  },[])
  return (
    <div className="bg-white mt-20 ">
      <div className="">
        <h1 className="text-center text-4xl py-10 shadow-lg mb-10">
          Our Mission, Vision and Value
        </h1>
      </div>
      <div ref={ref} className="flex justify-center flex-wrap cursor-default gap-5">
        {data.map((data ,index) => (
          <div key={index} className={`w-72 p-5 flex flex-col justify-center items-center shadow-md hover:shadow-2xl mb-10 rounded-xl hover:duration-300 drop-shadow-2xl hover:drop-shadow-none transform ${isVisible?'duration-1000 ':'opacity-0 translate-y-80'}`}>
            <img src={data.icon} alt=" icon" className={`transform duration-1000 ${isVisible?'':'opacity-0 -translate-y-80'}`}/>
            <h1 className="text-center text-2xl mb-5 mt-5">{data.title}</h1>
            <p className={`${index==2?"text-left":"text-center "}`}>{data.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
