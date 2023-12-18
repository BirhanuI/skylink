import { useState } from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import ceo from "./../assets/ceo.png";
import pic from "./../assets/software.png";
const Management = () => {
  const data = [
    {
      name: "Mohammed kerem",
      image: pic,
      position: "Head of Software Department",
    },
    {
      name: "Head of software department",
      image: pic,
      position: "Head of Software Department",
    },
    {
      name: "Head of software department",
      image: pic,
      position: "Head of Software Department",
    },
    {
      name: "Head of software department",
      image: pic,
      position: "Head of Software Department",
    },
    {
      name: "Head of software department",
      image: pic,
      position: "Head of Software Department",
    },
    {
      name: "Head of software department",
      image: pic,
      position: "Head of Software Department",
    },
  ];
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(-1);
  const [toggle2, setToggle2] = useState(false);
  const hover = () => {
    setToggle(!toggle);
  };
  const hover2 = () => {
    setToggle2(!toggle2);
  };
  return (
    <div className="mt-10 pb-56">
      <div className="flex justify-center items-center flex-col">
        <p className="text-4xl p-10">Our CEO</p>
        <div
          onMouseEnter={hover}
          onMouseLeave={hover}
          className="flex hover:shadow-2xl duration-300 overflow-hidden"
        >
          <div className="relative">
            <img src={ceo} alt="CEO Photo" className="w-60 " />
            <div
              className={`absolute left-0  right-0 bottom-0 opacity-30  ${
                toggle ? "top-0" : "top-96"
              } duration-300 bg-gradient-to-t from-black to-transparent`}
            ></div>
            <div
              className={`absolute bottom-0 right-0 left-0 text-white ${
                toggle ? "mb-5" : "-mb-20 "
              } duration-300 `}
            >
              <h1 className="text-center text-xl mb-2">Mohammed Kerem Ahmed</h1>
              <h2 className="text-center">chief executive officer (CEO)</h2>
            </div>
          </div>
          <div className="w-96 flex items-center justify-center ">
            <p className="p-5 pl-10 pointer-events-none">
              Hi, Welcome to Sky Link, a leading technology company on the
              cutting edge of innovation and transformation. At Sky Link, we
              believe in the power of technology to shape a better future, and
              we are committed to creating solutions that revolutionize
              industries, empower individuals, and make a positive impact on
              society.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-center text-4xl p-10 mt-20">Our Management Team</p>
        <div className="flex justify-center gap-10 flex-wrap ">
          {data.map((data, index) => (
            <div
              key={index}
              className={`w-72 relative duration-700 p-5 pb-0 rounded-md ${
                counter == index ? "shadow-2xl" : ""
              }`}
              onMouseEnter={() => {
                setCounter(index);
              }}
              onMouseLeave={() => {
                setCounter(-1);
              }}
            >
              <div className="relative overflow-hidden flex  gap-x-20">
                <img
                  src={pic}
                  alt="CEO Photo"
                  className={`w-72 h-56 bg-blue-300 object-cover relative z-20 rounded-md hover:rounded-b-none duration-700 ${
                    counter == index ? "rounded-none" : ""
                  }`}
                />
                <div
                  className={`absolute bottom-0 right-0 left-0 text-white duration-700 ${
                    counter == index ? "mb-0" : "-mb-20"
                  }`}
                >
                  <h1 className="text-center relative z-30">{data.name}</h1>
                  <h2 className="text-center relative z-30">{data.position}</h2>
                  <div
                    className={`absolute left-0 right-0 bottom-0 top-0 z-20 duration-300 bg-black opacity-30 `}
                  ></div>
                </div>
              </div>
              <div className=" relative h-52 bg-white rounded-b-md">
                <div
                  className={`duration-700 rounded-md ${
                    counter == index ? "absolute" : "-mt-52"
                  }`}
                >
                  <p>
                    Welcome to Sky Link, a leading technology company on the
                    cutting edge of innovation and transformation. At Sky Link,
                    we believe in the power of technology to shape a better
                    future, and we are
                  </p>
                  <div
                    className={`h-10 bg-blue-400 flex justify-around items-center text-white text-xl duration-300 rounded-b-md ${
                      counter == index ? "mt-6" : "-mt-6"
                    }`}
                  >
                    <FaFacebookF className="cursor-pointer" />
                    <FaInstagram className="cursor-pointer " />
                    <FaTelegramPlane className="cursor-pointer " />
                    <FaTwitter className="cursor-pointer " />
                    <FaLinkedinIn className="cursor-pointer " />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
