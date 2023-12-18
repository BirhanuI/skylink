import React, { useEffect } from "react";
import { useState, useRef } from "react";
import sky from "./../assets/skylink_bg.png";
import circuit from "./../assets/circuit.svg";
const Hero = () => {
  const text = [
    "Explore the Future with Confidence and Ignite Your Imagination. Together, Let's Redefine What's Possible",  ];
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);
  
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const handleText = (index) => {
    setCounter(index);
  };
  const divRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [counter, setCounter] = useState(0);
  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX, y: e.clientY });
  };
  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <div
      className=""
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={sky}
        alt="Image of the sky."
        className="absolute md:top-0 -z-10 lg:max-h-none h-96 sm:h-fit"
      />
      {/* <img src={circuit} alt="circuit board"  className="absolute z-10 top-0 mt-24 h-96 md:h-fit opacity-40 border-t-4 border-blue-950"/> */}
      {/* <div
          className="pointer-events-none absolute -inset-px opacity-0"
          style={{
            opacity:1,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 2, 0,0.3), transparent 50%)`,
          }}
        /> */}
      <div className="md:mt-5 lg:mt-14 md:ml-5 md:w-1/2 xl:w-2/5 relative z-1">
        <h1
          className={`drop-shadow-2xl text-blue-400 leading-tight flex-col pt-10 md:pt-0 items-center md:items-start text-5xl md:text-7xl lg:text-8xl font-bold  pointer-events-none flex transform  duration-300 ${
            isVisible ? "" : "-translate-y-32 opacity-0"
          }`}
        >
          <span className="truncate">Welcome to </span>{" "}
          <span className="text-blue-00 truncate ">sky link!</span>
        </h1>
        <div className="">
          <div
            className={`mt-10 lg:mt-16 relative flex items-center h-24`}
          >
            {/* <p className="text-white h-24 w-full text-center absolute blur-2xl -z-10 bg-white"></p> */}
            {text.map((text, index) => (
              <div
                key={index}
                className=" w-full h-full min-w-full duration-300"
                style={{ translate: `-${textIndex * 100}%` }}
              >
                <p
                  className={`stroke text-blue-400 text-xl font-black text-center ml-10 top-0 pointer-events-none z-10 transform duration-300 ${
                    isVisible ? "" : "opacity-0 translate-y-32"
                  }`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-5 justify-center">
          {text.map((text, index) => (
            <div
              key={index}
              onClick={() => {
                handleText(index);
              }}
              className={`w-4 h-4 rounded-full ${
                index == counter ? "bg-white" : "bg-blue-500"
              }  mt-10`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
