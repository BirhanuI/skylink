import { useParams } from "react-router-dom";
import expo from "./../assets/expo2.jpg";
import expow from "./../assets/expo2.jpg";
import expo_agreement from "./../assets/expo_agree.png";
import Navbar from "./navbar";
import Footer from "./footer";


import training from './../assets/news3.jpg'
import gps from './../assets/news2.jpg'
const NewsDetail = () => {
  const { id } = useParams();
  // const Related = [{}, {}, {}, {}, {}];
  const Related = [
    {image:expow,title:" The Expo serves as a catalyst for collaboration and healthy competition.",id:1},
    {image:gps,title:"Skylink Technologies implanted GPS on different cars for Ethio Ceramics.",id:2},
    {image:training,title:"Skylink Technologies is going to start Training coming soon.",id:3},
    
  ];
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <div className={`w-full p-10`}>
          <div className="w-full overflow-hidden">
            <img
              src={Related[id-1].image}
              alt="logo"
              className="w-full rounded-md hover:scale-105 duration-200"
            />
          </div>
          <div className="w-full">
            <h1 className="text-2xl py-5">{Related[id-1].title}</h1>
            <div className="mb-2 text-slate-400 flex justify-between">
              <p>On Dec 15, 2016 </p>
              {/* <div className="flex items-center">
                <GrView /> <span>{"1,000"}</span>
              </div> */}
            </div>
            <p className="">
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
          </div>
        </div>
        <div className="p-10">
          <h1 className="text-2xl text-center">Related News</h1>
          {Related.map((item, index) => (
            <div className="mt-5" key={index}>
              <div className=" overflow-hidden border p-1 flex items-center">
                <img
                  src={item.image}
                  alt="expo"
                  className="object-cover h-32 w-36"
                />
              <h1 className="text-center w-full px-5">{item.title}</h1>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;
