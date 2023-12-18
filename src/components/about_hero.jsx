import { useEffect, useState } from "react";
import bg from "./../assets/service_bg.png";
const AboutHero = () => {
  useEffect(()=>{
    setTimeout(()=>{setIsVisible(true);},300)
    
  },[])
  const [isVisible,setIsVisible] = useState(false)
  return (
    <div className=" bg-[url('/src/assets/service_bg.png')] xl:bg-[url('/src/assets/service_bg.pn')] bg-cover">
      <div className="bg-[url('./../assets/service_bg.png')] relative opacity-80">
        <img src={bg} alt="addis abeba" className="absolute hidden xl:block top-0 -z-10" />
        <div className={`absolute z-10 h-56 transform ml-40  w-1/2 bg-blue-300 duration-1000 ${isVisible?'origin-top-left rotate-[45deg]':''}`}></div>
        <div className={`absolute z-10 h-56 transform w-3/6 -ml-40 bg-blue-300 duration-1000 ${isVisible?'origin-top-right -rotate-[45deg]':''}`}></div>
        <div className={`absolute z-10 h-36 ml-28  w-1/3 bg-blue-300 duration-1000 ${isVisible?'mt-[270px]':''}`}></div>
      </div>
      <div className="lg:ml-36 text-white flex flex-col justify-center items-center lg:block relative">
        <p className="text-5xl py-10 z-10 relative">Who We Are</p>
        <p className="xl:w-1/3 sm:w-1/2 w-5/6  leading-relaxed relative z-10 pb-10">
          Sky link Technologies is a wholly owned private company, which was
          established in 2021 to provide Information and Communication
          Technology (ICT) solutions in the country. Specializing IT Management,
          Data Security and Website Design services, Sky link Technologies has a
          wealth of experience and excellence in advanced ICT knowledge delivery
          to the corporate, education and government markets. Sky link
          Technologies is emerging in the Ethiopian ICT job market for producing
          high quality IT products and services. We have professionals who have
          been working in the sector for over 15 years and have gained valuable
          experience in this area.
        </p>
          <span className="absolute top-0 left-0 right-0 bottom-0 z-0 g-blue-300"></span>
      </div>
    </div>
  );
};

export default AboutHero;
