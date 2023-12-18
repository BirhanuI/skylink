import expo from "./../assets/expo2.jpg";
import expow from "./../assets/expo2.jpg";
import Btn from "./sub_components/btn";
import expo_agreement from "./../assets/expo_agree.png";
import { Link } from "react-router-dom";
const NewsHero = () => {
  return (
    <div className={`relative`}>
      <div className="flex justify-center text-blue-400">
        {/* <div className="absolute -z-10 top-0 hidden lg:block">
          <img className={` `} src={expo_agreement} alt="image" />
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50`}
          ></div>
        </div> */}
        <div className={`flex w-full justify-center items-center gap-10 p-10`}>
        <div className="w-full overflow-hidden">
          <img src={expo} alt="logo" className="w-full rounded-md hover:scale-105 duration-200" />
        </div>
          <div className="w-full">
            <h1 className="text-2xl">
              Dire International Tech Expo
            </h1>
            <p className="line-clamp-[8] overflow-hidden mt-3">
              The Expo serves as a catalyst for collaboration and healthy
              competition between international and local technology companies,
              fostering a vibrant ICT ecosystem. It combines informative
              conference sessions, a prominent exhibition, and well-curated
              networking opportunities, providing a unique platform for
              knowledge exchange and business development. Dire Dawa, one of
              only two chartered cities in the country, is located approximately
              500 kilometers east of the capital. It stands as one of Ethiopia's
              largest cities, home to an estimated half-million people. Dire
              Dawa's proximity to Djibouti and its position along a major trade
              corridor make it a vital economic hub. The city owes its
              foundation to the construction of the Addis Ababa-Djibouti railway
              over a century ago. Over time, Dire Dawa's residents have
              developed a reputation for their laid-back lifestyle and eagerness
              to embrace new technology. Its location, economic importance, and
              forward-mindedness make Dire Dawa a prime candidate for progress
              in digitization outside of the capital. 1st Dire International
              Tech Expo is where established technology service vendors, private
              and public sector decision-makers, integrators, and users of ICT
              technology for business or public good—as well as disruptive
              startups with unique solutions—come together to create important
              networks and build valuable partnerships. From enterprise
              solutions to large telecom operators, 1st Dire International Tech
              Expo brings the latest technology innovations to benefit
              organizations operating or planning to engage in the expanding
              Ethiopian market. The Expo serves as a catalyst for collaboration
              and competition between foreign and local technology companies and
              a multitude of partners in the Technology ecosystems. The event
              combines unrivaled conference content with a major exhibition and
              a well-crafted networking opportunity. As The Second diplomatic
              capital—and a rising conference tourism destination—enchanting
              Dire Dawa provides the appropriate setting for business travelers
              and those curious to explore the opportunities of the wider
              Ethiopian market
            </p>
            <div className="mt-3 text-blue-400 hover:text-white">
              <Link to={`/news/${1}`}><Btn options={{ title: "Read More" }} /></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
