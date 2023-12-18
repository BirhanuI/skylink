import { useParams } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import Navbar from "./navbar";
import Footer from "./footer";
import seminar from "./../assets/seminar.jpg";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const WatchSeminar = () => {
  const { id } = useParams();
  const next = [{}, {}, {}, {}, {}];
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="flex">
          <div className="w-full p-5">
            {/* <img src={seminar} alt="" /> */}
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
            <h1 className="text-xl mt-2">
              Wede Nege: Building a Greener and Resilient Future
            </h1>
            <div className="flex items-center mt-5">
              {" "}
              34342 views |  Sunday, Dec 11, 2016
            </div>
            <p className="mt-5">
              The impacts of climate change are growing, but so are the world’s
              attempts to stop them. Hosted by Birhanu Negash of Wede Nege
              seminar, this documentary examines the rapid technological
              revolution underway and the possibility of a better future for
              all.
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl text-center">Watch Next</h1>
            {next.map((item, index) => (
              <div
                key={index}
                className="duration-200 cursor-pointer hover:shadow-2xl flex items-center hover:rounded-lg m-5"
              >
                <img
                  src={seminar}
                  alt=""
                  className="object-cover w-36 h-24 p-1"
                />
                <div className="p-5">
                  <h1 className="mt-1 text-gray-400">Wede Nege seminar</h1>
                  <p className="font-semibold">
                    Strategies for Success in an Evolving World
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WatchSeminar;
