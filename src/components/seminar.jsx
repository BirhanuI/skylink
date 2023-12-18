import { FaArrowRight } from "react-icons/fa6";
import seminar from "./../assets/seminar.svg";
import expo from "./../assets/seminar.jpg";
import { Link } from "react-router-dom";
const Seminar = () => {
  const previous = [{}, {}, {}, {}];
  return (
    <div className="">
      <div className="bg-blue-400 flex justify-around items-center text-white">
        <div className="flex flex-col">
          <p className="flex flex-col">
            <span className="text-3xl">Big ideas, straight to your inbox</span>
            Sign up to get notification when new seminar is available and more.
          </p>
          <div className="mt-5">
            <button className="border hover:border-red-300 hover:scale-105 px-4 rounded-md py-2 duration-500 flex items-center">
              Subscribe
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="">
          <img src={seminar} alt="seminar image" className="h-80" />
        </div>
      </div>
      <div className="flex">
        <div className="w-full p-10">
          <img src={expo} alt="wede nege" className="w-full" />
        </div>
        <div className="w-full p-10 flex flex-col justify-center">
          <h1 className="text-xl text-slate-400">Wede Nege seminar</h1>
        <h2 className="text-2xl mt-5">Building a Greener and Resilient Future</h2>
        <p className="">The impacts of climate change are growing, but so are the world’s attempts to stop them. Hosted by Birhanu Negash of Wede Nege seminar, this documentary examines the rapid technological revolution underway and the possibility of a better future for all.</p>
        <div className="">
        <Link to={'/events/seminar/2'}><button className="bg-blue-400 text-white px-4 py-2 rounded-md mt-10 hover:scale-105 hover:rounded-none duration-50">Watch Now</button></Link></div>
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl ml-10 mb-5 mt-10">Previously held seminars</h1>
        <div className="flex justify-around px-5 overflow-x-auto gap-5 pb-10">
          {previous.map(() => (
            <div className="w-64 p-5 duration-200 cursor-pointer hover:shadow-2xl">
              <img src={expo} alt="" className="object-cover w-64 h-40" />
              <h1 className="text-lg mt-1 text-slate-400">Wede Nege seminar</h1>
              <p className="">Strategies for Success in an Evolving World</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seminar;
