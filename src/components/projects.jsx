import { useEffect, useRef, useState } from "react";
import project from "./../assets/project1.png";
import bg from "./../assets/project_bg.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
const Projects = () => {
  const [data, setData] = useState([]);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/our-solution").then((res) => {
      setData(res.data);
    });
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { root: null, rootMargin: "0px" }
    );
    textObserver.observe(ref.current);
  }, []);
  const [projectIndex, setProjectIndex] = useState(0);
  const handleNext = () => {
    if (projectIndex < data.length - 1) {
      setProjectIndex(projectIndex + 1);
    } else {
      setProjectIndex(0);
    }
  };
  const handlePrev = () => {
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1);
    } else {
      setProjectIndex(data.length - 1);
    }
  };
  return (
    <div ref={ref} className="w-full">
      <div className="flex w-full">
        <div className=" bg-slate-200 w-full h-full">
          <p className="text-center text-3xl py-10 ">
            Our proud projects that makes us standout.
          </p>
          <div className="flex w-full h-full overflow-hidden relative">
            <div
              onClick={handlePrev}
              className="absolute z-10 top-0 bottom-0 w-16 bg-slate-200 left-0 flex justify-center items-center text-xl opacity-30 hover:opacity-60 hover:scale-105"
            >
              <FaChevronLeft />
            </div>
            <div
              onClick={handleNext}
              className="absolute top-0 bottom-0 w-16 bg-slate-200 right-0 z-10 flex justify-center items-center text-xl opacity-30 hover:opacity-60 hover:scale-105"
            >
              <FaChevronRight />
            </div>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex min-w-full h-full justify-center bg-gray-100 py-10 duration-1000"
                style={{ transform: `translateX(-${projectIndex * 100}%)` }}
              >
                <div
                  className={`h-96  lg:w-1/3 ml-20 transform duration-700 ${
                    isVisible ? "" : "opacity-0 translate-x-72"
                  }`}
                >
                  <h1 className="text-4xl text-blue-400 text-center mb-10">
                    {item.title}
                  </h1>
                  <p className="">
                    {item.description}
                  </p>
                </div>
                <div className="lg:relative hidden lg:block lg:w-1/2">
                  <img
                    src={`http://localhost:8000${item.image}`}
                    alt="Project pic"
                    className={`-mr-24 relative z-10 transform duration-700 ${
                      isVisible ? " w-full" : "w-1 opacity-0"
                    }`}
                  />
                  <img className="absolute top-0 " src={bg} alt="something" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
