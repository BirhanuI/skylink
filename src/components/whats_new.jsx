import expo from "./../assets/expo2.jpg";
import Navbar from "./navbar";
import next_arrow from "./../assets/next-arow.svg";
import seminar from "./../assets/seminar.jpg";
import articles from "./../assets/articles.gif";
const WhatsNew = () => {
  const NewsList = ["", "", "", "", ""];

  return (
    <>
      <div className="shadow-xl">
        <Navbar />
      </div>
      <div className="text-blue-400 ml-5">
        <div class="container mt-10 gap-10">
          <div class="news flex flex-col items-center p-5">
            <h1 className="text-3xl mb-5">Latest News</h1>
            <div className="flex justify-center relative">
              <img src={expo} alt="news" className="" />
              <div className="bg-gradient-to-t from-blue-400 absolute top-0 left-0 right-0 bottom-0"></div>
              <p className="absolute bottom-0 py-5 text-xl text-white ">
                sky link is about to host new expo
              </p>
            </div>
            <div className="flex gap-3 p-3">
              {NewsList.map((item, index) => {
                return (
                  <div
                    className="p-1 rounded-full bg-blue-400"
                    key={index}
                  ></div>
                );
              })}
            </div>
            <div className="text-blue-400 flex items-center self-end">
              <p className="pointer-events-none pr-3 text-xl">Go to News</p>
              <img
                src={next_arrow}
                alt="go to website"
                className="w-10 hover:scale-105 cursor-pointer hover:drop-shadow-xl duration-300"
              />
            </div>
          </div>
          <div class="events flex flex-col items-center p-5">
            <h1 className="text-3xl text-center font-semibold mb-5">Events</h1>
            <div className="flex justify-center relative">
              <img src={seminar} alt="seminar" className="" />
              <div className="bg-gradient-to-t from-blue-400 absolute top-0 left-0 right-0 bottom-0"></div>
              <p className="absolute bottom-0 py-5 text-xl text-white ">
                sky link is about to host new expo
              </p>
            </div>
            <div className="flex gap-3 p-3">
              {NewsList.map((item, index) => {
                return (
                  <div
                    className="p-1 rounded-full bg-blue-400"
                    key={index}
                  ></div>
                );
              })}
            </div>
            <div className="text-blue-400 flex items-center self-end">
              <p className="pointer-events-none pr-3 text-xl">Go to Events</p>
              <img
                src={next_arrow}
                alt="go to website"
                className="w-10 hover:scale-105 cursor-pointer hover:drop-shadow-xl duration-300"
              />
            </div>
          </div>
          <div class="meweda mr-5 flex  items-center flex-col gap-5">
            <h1 className="text-4xl text-center mt-5 font-black">
              Meweda Online
            </h1>

            <p className="p-5 text-center">
              In this era of digital connectivity, where entertainment options
              are vast and diverse, there's a growing need for a centralized
              platform that brings together a plethora of shows and series from
              various genres.
            </p>
            <div className="w-full relative rounded-lg">
              <img
                className="h-96 object-fill rounded-lg"
                src={articles}
              />
              <div className="rounded-lg absolute top-0 bottom-0 right-0 left-0 bg-blue-400 opacity-60"></div>
              <p className="absolute top-0 bottom-0 right-0 left-0 text-xl text-white flex flex-col items-center justify-center px-10 text-center">
                <span className="text-center">Articles</span>
                Meweda Online's Articles page, your go-to destination for a rich collection of captivating content designed to inform, entertain, and inspire.
              </p>
            </div>
            <div className="w-full relative rounded-lg">
              <img
                className="h-96 object-fill rounded-lg"
                src={articles}
              />
              <div className="rounded-lg absolute top-0 bottom-0 right-0 left-0 bg-blue-400 opacity-60"></div>
              <p className="absolute top-0 bottom-0 right-0 left-0 text-xl text-white flex flex-col items-center justify-center px-10 text-center">
                <span className="text-center">Articles</span>
                Meweda Online's Articles page, your go-to destination for a rich collection of captivating content designed to inform, entertain, and inspire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
