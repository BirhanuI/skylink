import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import OurService from "./components/ourService";
import { CardSpotlightEffect } from "./components/spotlight";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <OurService />
    </div>
  );
}

export default App;
