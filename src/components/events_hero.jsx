import bado from "./../assets/bado.png";
import arrow from "./../assets/arrow.svg";
import expo from "./../assets/expo.png";
import next_arrow from './../assets/next-arow.svg';
const EventsHero = () => {
  return (
    <div className="relative flex justify-center flex-col items-center text-white">
      <div className="absolute top-0 -z-10">
        <img src={bado} className="h-full object-fill" alt="bado" />
      </div>
      <div className="w-1/2 mt-20">
        <h1 className="text-5xl text-center">
          Discover the Future at Diredawa Tech Expo
        </h1>
        <h2 className="text-center mt-10 text-xl font-thin">
          Diredawa City Administration and Skylink Technologies Curate an
          Unforgettable Tech Experience
        </h2>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <img
          src={arrow}
          className="animate-bounce w-20"
          alt="down pointing arrow"
        />
        <button className="border rounded-md mt-2 mb-20 px-5 py-2 hover:rounded-none hover:bg-blue-400 duration-150 hover:scale-105 text-lg">
          Attend
        </button>
      </div>
      <div className="bg-white flex w-full items-center">
        <div className="w-full p-10">
          <img src={expo} alt="Expo logo" className="" />
        </div>
        <div className="text-blue-400 p-10 w-full">
          Attention technology enthusiasts, innovators, and industry leaders!
          Get ready to witness a groundbreaking event that will shape the future
          of technology. Diredawa City Administration and Skylink Technologies
          proudly present the highly anticipated Diredawa Tech Expo 2023!
        </div>
      </div>
      <div className="text-blue-400 mb-10 flex items-center ">
        <p className="pointer-events-none pr-3 text-xl">Vist Website</p>
        <img src={next_arrow} alt="go to website" className="w-10 hover:scale-105 cursor-pointer hover:drop-shadow-xl duration-300"/>
      </div>
    </div>
  );
};

export default EventsHero;
