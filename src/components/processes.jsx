import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import icon from "./../assets/design.svg";
import { useEffect } from "react";
const Process = () => {


  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const rotate = setInterval(() => {
      setRotation(rotation + 90);
    }, 5000);
    retrun => clearInterval(rotate);
  }, []);
  const circles = [
    { postion: 1 },
    { postion: 2 },
    { postion: 3 },
    { postion: 4 },
  ];

  // const clockRotate = () => {
  //   setInterval(() => {
  //     setRotation(rotation + 90);
  //   },5000)
    
  // };
  const antiClockRotate = () => {
    setRotation(rotation - 90);
  };
  const data = [
    { title: "Meet and Consult", discription: "", icon: "" },
    { title: "Design", discription: "", icon: "" },
    { title: "Implement", discription: "", icon: "" },
    { title: "Train", discription: "", icon: "" },
    { title: "support", discription: "", icon: "" },
  ];
  const [dataShown, setDataShown] = useState({});
  const [dataIndex, setDataIndex] = useState(0);
  const [circle1, setcircle1] = useState("Meet and Consult");
  const [circle2, setcircle2] = useState("Design");
  const [circle3, setcircle3] = useState("Implement");
  const [circle4, setcircle4] = useState("Train");
  const [circle5, setcircle5] = useState("Support");
  const [count, setCount] = useState(0);

  const showData = () => {
    if (count == 0) {
      setcircle5("Train");
      setCount(count + 1);
    } else if (count == 1) {
      setcircle1("Support");
      setCount(count + 1);
    } else if (count == 2) {
      setcircle2("Meet and Consult");
      setCount(count + 1);
    } else if (count == 3) {
      setcircle3("Design");
      setCount(count + 1);
    } else {
      setcircle4("Implement");
      setCount(0);
    }
  };
  return (
    <div className="mt-20">
      <h1 className="text-center text-5xl">How Sky Link solve your problem?</h1>
      <div className="flex justify-around items-center">
        <div className="w-20 h-20 text-5xl ">
          <FaArrowLeft
            className="hover:scale-105 cursor-pointer text-blue-300"
            // onClick={antiClockRotate}
          />
        </div>
        <div
          className={`flex justify-center flex-col items-center relative mt-40`}
        >
          <div
            className={`text-2xl text-white w-[550px] h-[550px] bg-blue-400 rounded-full flex justify-center items-center relative transform duration-1000`}
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className="w-[500px] h-[500px] bg-white rounded-full absolute" />
            <div className="w-full h-full flex justify-start items-center ">
              <div className=" w-40 h-40 bg-blue-300 rounded-full absolute -ml-20 transform -rotate-90 flex justify-center items-center text-center">
                {circle2}
                <img className="absolute  w-20 -z-10" src={icon} alt="icon" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-400 opacity-50 rounded-full -z-10"></div>
              </div>
            </div>
            <div className="w-40 h-40 bg-blue-300 z-10 rounded-full absolute top-0 -mt-20 flex justify-center items-center text-center">
              {circle1}
              <img className="absolute  w-20 -z-10" src={icon} alt="icon" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-400 opacity-50 rounded-full -z-10"></div>
            </div>
            <div className="w-40 h-40 bg-blue-300 rounded-full absolute bottom-0 -mb-20 transform rotate-180 flex justify-center items-center text-center">
              {circle3}
              <img className="absolute  w-20 -z-10" src={icon} alt="icon" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-400 opacity-50 rounded-full -z-10"></div>
            </div>
            <div className="w-full h-full flex justify-end items-center relative">
              <div className="w-40 h-40 bg-blue-300 rounded-full absolute -mr-20 transform rotate-90 flex justify-center items-center text-center">
                {circle5}
                <img className="absolute  w-20 -z-10" src={icon} alt="icon" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-400 opacity-50 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-20 h-20 text-5xl ">
          <FaArrowRight
            className="hover:scale-105 cursor-pointer text-blue-300"
            onClick={() => {
              clockRotate();
              showData();
            }}
          />
        </div>
      </div>
      <div className="w-full h-[490px] bg-white relative z-10 -mt-[320px]"></div>
    </div>
  );
};

export default Process;
