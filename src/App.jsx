import { Route, Routes, useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";
import Happy from "./components/happy";
import Hero from "./components/hero";
import Mission from "./components/mission";
import Navbar from "./components/navbar";
import OurService from "./components/services";
import AboutHero from "./components/about_hero";
import Projects from "./components/projects";
import WhyUs from "./components/whyUs";
import Process from "./components/processes";
import Management from "./components/management";
import Chat from "./components/chat";
import NewsHero from "./components/news_hero";
import PriceCalculator from "./components/price_calculator";
import NewsList from "./components/news_list";
import OurServiceHero from "./components/our_service_hero";
import OurClients from "./components/our_clients";
import TrainingHero from "./components/training_hero";
import TrainingNav from "./components/trainings_nav";
import Trainings from "./components/trainings";
import OurTrainingApproach from "./components/training_approach";
import Solution from "./components/our_solution";
import ProjectsDone from "./components/projects_done";
import TrainingRegistration from "./components/training_registration";
import Admin from "./components/admin";
import "react-toastify/dist/ReactToastify.css";
import EventsHero from "./components/events_hero";
import WhatsNew from "./components/whats_new";
import NewsDetail from "./components/news_detail";
import EventNav from "./components/sub_components/event_nav";
import Seminar from "./components/seminar";
import WatchSeminar from "./components/seminar_watch";
import MewedaNav from "./components/sub_components/meweda_nav";
import MewedaHome from "./components/meweda_home";
import ArticleDetail from "./components/meweda_article_detail";

function App() {
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/about"} element={<AboutUs />} />
        <Route path={"/news"} element={<News />} />
        <Route path={"/news/:id"} element={<NewsDetail />} />
        <Route path={"/services"} element={<OurServices />} />
        <Route path={"/training"} element={<Training />} />
        <Route path={"/solutions"} element={<OurSolution />} />
        <Route path={"/admin/*"} element={<Admin />} />
        <Route path={"/meweda/:meweda"} element={<Meweda />} />
        <Route path={"/meweda/articles/:id"} element={<ArticleDetail />}/>
        <Route path={"/events/:event"} element={<Events />} />
        <Route path={"/events/seminar/:id"} element={<WatchSeminar />} />
        <Route path={"/new"} element={<WhatsNew />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </div>
  );
}
const Home = () => {
  const { ref, inView, entry } = useInView({ rootMargin: "-300px" });
  return (
    <>
      <div
        className={`${
          inView
            ? "sticky top-0 bg-white right-0 left-0 duration-700 z-30 shadow-2xl"
            : ""
        }`}
      >
        <Navbar />
      </div>
      <Hero />
      <div ref={ref}>
        <OurService />
        <Happy />
        <WhyUs />
        <Projects />
        <OurClients />
      </div>
      <Chat />
      <Footer />
    </>
  );
};
const AboutUs = () => {
  const { ref, inView, entry } = useInView({ rootMargin: "-300px" });
  return (
    <>
      <div
        className={`${
          inView
            ? "sticky top-0 bg-white right-0 left-0 duration-700 z-30 shadow-2xl"
            : ""
        }`}
      >
        <Navbar />
      </div>
      <AboutHero />
      <div ref={ref}>
        <Mission />
        <Process />
        <div className="-mt-[450px] relative z-10">
          <Management />
        </div>
      </div>
      <Chat />
      <Footer />
    </>
  );
};
const OurServices = () => {
  const { ref, inView, entry } = useInView({ rootMargin: "-300px" });
  return (
    <div className="">
      <div
        className={`${
          inView
            ? "sticky top-0 bg-white right-0 left-0 duration-700 z-30 shadow-2xl"
            : ""
        }`}
      >
        <Navbar />
      </div>
      <OurServiceHero />
      <div ref={ref}>
        <PriceCalculator />
      </div>
      <Chat />
      <Footer />
    </div>
  );
};
const OurSolution = () => {
  const { ref, inView, entry } = useInView({ rootMargin: "-300px" });

  return (
    <div className="">
      <div
        className={`${
          inView
            ? "sticky top-0 bg-white right-0 left-0 duration-700 z-30 shadow-2xl"
            : ""
        }`}
      >
        <Navbar />
      </div>
      <div ref={ref}>
        <Solution />
        <ProjectsDone />
      </div>
      <Chat />
      <Footer />
    </div>
  );
};
const Training = () => {
  const { ref, inView, entry } = useInView({ rootMargin: "-300px" });
  return (
    <div className="">
      <div
        className={`${
          inView
            ? "sticky top-0 bg-white right-0 left-0 duration-700 z-30 shadow-2xl"
            : ""
        }`}
      >
        <Navbar />
      </div>
      <TrainingHero />
      <div ref={ref}>
        <TrainingNav />
        <OurTrainingApproach />
        {/* <TrainingRegistration /> */}
      </div>
      <Chat />
      <Footer />
    </div>
  );
};
const Events = () => {
  const { event } = useParams();
  return (
    <div className="">
      <Navbar />
      <EventNav />
      {event == "expo" ? <EventsHero /> : <Seminar />}

      <Chat />
      <Footer />
    </div>
  );
};
const News = () => {
  const { ref, inView, entry } = useInView({ rootMargin: "-300px" });
  return (
    <div className="">
      <div
        className={`${
          inView
            ? "sticky top-0 bg-white right-0 left-0 duration-700 z-30 shadow-2xl"
            : ""
        }`}
      >
        <Navbar />
      </div>
      <NewsHero />
      <div ref={ref}>
        <NewsList />
      </div>
      <Chat />
      <Footer />
    </div>
  );
};
const Meweda = () => {
  return (
    <div>
      <Navbar />
      <MewedaNav />
      <MewedaHome />
      <Footer />
    </div>
  );
};

export default App;
