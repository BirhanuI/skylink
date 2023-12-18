import {BsCheckLg} from 'react-icons/bs'
import music_page from "./../assets/music.png";
import dire from "./../assets/dire.png";
import { useEffect, useRef, useState } from 'react';
const WhyUs = () => {
  const ref = useRef(null);
  const [isVisible,setIsVisible] = useState(false);
  useEffect(()=>{
    const textObserver = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting)setIsVisible(true)
    },{root:null,rootMargin:"-300px"});
    textObserver.observe(ref.current)
  },[])
  const whyUs=['We design websites that Beautiful and easy to understand UI, professional animations','We design websites that Beautiful and easy to understand UI, professional animations','We design websites that Beautiful and easy to understand UI, professional animations','We design websites that Beautiful and easy to understand UI, professional animations','We design websites that Beautiful and easy to understand UI, professional animations',]
  return (
    <div className="flex xl:mt-20 mt-10 relative text-blue-400"ref={ref}>
      <div className={`grow flex flex-col items-center mb-36 transform duration-1000 ${isVisible?"":"opacity-0 -translate-x-96"}`}>
        <p className="text-5xl ">Why Choose Us?</p>
        <p className="w-5/6 mt-10 mb-10 text-lg ">
          At Sky Link, we are passionate about creating stunning and functional
          websites that make a lasting impression.
        </p>
        {whyUs.map((why,index)=><ul key={index} className="ml-8 lg:ml-24 flex items-center"><BsCheckLg className='font-bold text-xl mr-5 animate-pulse'/><li className="mt-5">{why}</li></ul>)}
      </div>
      <div className="absolute -z-20 right-0 lg:relative hidden lg:block w-96 ">
        <img src={music_page} className={`transform duration-1000 ${isVisible?"":"opacity-0 -translate-y-52"}`}/>
        <img src={dire} className={`absolute top-0 mt-32 xl:mt-40 transform duration-1000 ${isVisible?"":"opacity-0 translate-y-52"}`} />
      </div>
    </div>
  );
};

export default WhyUs;
