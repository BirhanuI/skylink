import { Route, Routes, useParams } from "react-router-dom";
import Articles from "./meweda_articles";
import Engeda from "./meweda_engeda";
import Gubegnt from "./meweda_gubegnet";
import TechPlus from "./meweda_techplus";

const MewedaHome = () => {
  const { meweda } = useParams();
  if (meweda == "article") return <Articles />;
  else if (meweda == "engeda") return <Engeda />;
  else if (meweda == "gubegnt") return <Gubegnt />;
  else if (meweda == "tech-plus") return <TechPlus />;
};

export default MewedaHome;
