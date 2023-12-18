import ui from "./../assets/ui.png";
import network from "./../assets/network.png";
import design from "./../assets/design.png";
import data_center from "./../assets/data_center.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const OurService = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/our-service").then((res) => {
      setData(res.data);
    });
  }, []);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const [textIsVisible, setTextIsVisible] = useState(false);
  const [cardIsVisible, setCardIsVisible] = useState(true);
  const [hover, setHover] = useState(-1);
  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTextIsVisible(true);
      },
      { root: null, rootMargin: "-200px" }
    );
    const cardObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCardIsVisible(true);
      },
      { root: null, rootMargin: "200px" }
    );
    textObserver.observe(textRef.current);
    cardObserver.observe(cardRef.current);
  }, []);
  return (
    <div className="mt-5 lg:mt-16 py-4 md:py-8 flex justify-center flex-col items-center bg-white">
      <div
        className={`lg:w-4/6 md:w-5/6 w-full px-5 md:p-0 transform duration-700 ${
          textIsVisible ? "" : "-translate-y-32 opacity-0"
        } `}
        ref={textRef}
      >
        <h1 className="text-center text-2xl md:text-5xl lg:p-5 mb-5 font-semibold text-blue-400">
          How can we assist?
        </h1>
        <p className="mb-10 text-center text-blue-400">
          We help premium brands achieve their future through innovation and
          creative perspectives. We grow your company through proprietary
          in-house ideas, tested and perfected over the years.
        </p>
      </div>
      <div
        className={`text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center `}
        ref={cardRef}
      >
        {data.map((service, index) => (
          <div
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(-1)}
            key={index}
            className={`hover:shadow-none shadow-2xl hover:text-slate-700 flex flex-col items-center bg-blue-30 p-10 rounded-2xl cursor-pointer transform duration-700 h-full ${
              cardIsVisible ? "" : "translate-y-32 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center w-32 h-32 bg-white rounded-full">
              <img src={`http://localhost:8000${service.icon}`} alt="service icon" className="w-20" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-2xl my-5">{service.title}</h1>
            </div>
            <div className="text-center w-56 "  dangerouslySetInnerHTML={{ __html: service.description }}/>
            <div className="rounded-2xl">
              <img
                className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl object-cover -z-10"
                src={`http://localhost:8000${service.image}`}
                alt="bg pic"
              />
              <div
                className={`absolute left-0 right-0 bottom-0  bg-white opacity-60 -z-10 rounded-2xl duration-500 ${
                  hover == index ? "top-0" : "top-full"
                }`}
              ></div>
              <div
                className={`absolute top-0 left-0 right-0  bg-blue-300 -z-10 rounded-2xl duration-300 ${
                  hover == index ? "bottom-full" : "bottom-0"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
