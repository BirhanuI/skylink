import Footer from "./footer";
import Navbar from "./navbar";
import news_pic from "./../assets/woman.jpg";
import news2 from "./../assets/AI.jpeg";
import news3 from "./../assets/vr.jpg";
import { useParams } from "react-router-dom";
const ArticleDetail = () => {
  const { id } = useParams();
  const news = [
    {
      image: news3,
      title:
        "Stepping into the Virtual Realm: Exploring the Boundless Possibilities of VR.",
      id: 1,
      detail: "Virtual Reality (VR) is a groundbreaking technology that propels us into immersive digital worlds, redefining how we experience and interact with information, entertainment, and even our own imagination. By creating simulated environments that engage our senses, VR has the power to transport us to new dimensions and revolutionize numerous sectors. VR technology enables us to transcend the limitations of physical reality and enter a realm where possibilities are limitless. Through headsets and motion-tracking systems, we can explore virtual worlds that replicate real-life settings or delve into fantastical realms that exist only in our wildest dreams. With each step, we unlock a captivating universe waiting to be discovered. The applications of VR span a multitude of industries. In gaming and entertainment, VR plunges us into immersive adventures, allowing us to become active participants in thrilling narratives and lifelike experiences. In education, VR opens doors to interactive learning, enabling students to explore historical events, visit distant lands, and comprehend complex concepts in a profoundly engaging manner.",
    },
    {
      image: news_pic,
      title: "Empowering Women: Championing Equality and Human Rights",
      id: 2,
      detail: "Women's rights are an essential aspect of building a just and equitable society. They encompass the fundamental principle that women should have the same rights, opportunities, and freedoms as their male counterparts. The pursuit of women's rights is not only a matter of justice, but it is also crucial for the overall progress and well-being of societies worldwide. Empowering women means recognizing and addressing the systemic challenges and barriers they face in various spheres of life, including education, employment, healthcare, politics, and personal autonomy. It involves dismantling discriminatory practices, stereotypes, and biases that perpetuate gender inequality. By ensuring equal access to education, economic opportunities, and healthcare, we enable women to fulfill their potential and contribute meaningfully to society.",
    },
    {
      image: news2,
      title: "Unleashing the Power of AI: Transforming the Future.",
      id: 3,
      detail: "Artificial Intelligence (AI) is revolutionizing the way we live, work, and interact with technology. As a transformative force, AI holds immense potential to shape the future and bring about unprecedented advancements across various industries and sectors. AI refers to the development of intelligent machines that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and problem-solving. By leveraging vast amounts of data and sophisticated algorithms, AI systems can learn, adapt, and make predictions, leading to remarkable breakthroughs in fields like healthcare, finance, transportation, and more. The impact of AI is far-reaching. In healthcare, AI-powered technologies assist in diagnosing diseases, analyzing medical images, and personalizing treatment plans, ultimately improving patient outcomes. In finance, AI algorithms enable efficient fraud detection, risk assessment, and algorithmic trading, enhancing operational efficiency and reducing costs. In transportation, AI plays a vital role in autonomous vehicles, optimizing traffic management, and improving road safety.",
    },
    {
      image: news_pic,
      title: "Empowering Women: Championing Equality and Human Rights",
      id: 4,
      detail: "Women's rights are an essential aspect of building a just and equitable society. They encompass the fundamental principle that women should have the same rights, opportunities, and freedoms as their male counterparts. The pursuit of women's rights is not only a matter of justice, but it is also crucial for the overall progress and well-being of societies worldwide. Empowering women means recognizing and addressing the systemic challenges and barriers they face in various spheres of life, including education, employment, healthcare, politics, and personal autonomy. It involves dismantling discriminatory practices, stereotypes, and biases that perpetuate gender inequality. By ensuring equal access to education, economic opportunities, and healthcare, we enable women to fulfill their potential and contribute meaningfully to society.",
    },
    {
      image: news2,
      title: "Unleashing the Power of AI: Transforming the Future.",
      id: 5,
      detail: "Artificial Intelligence (AI) is revolutionizing the way we live, work, and interact with technology. As a transformative force, AI holds immense potential to shape the future and bring about unprecedented advancements across various industries and sectors. AI refers to the development of intelligent machines that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and problem-solving. By leveraging vast amounts of data and sophisticated algorithms, AI systems can learn, adapt, and make predictions, leading to remarkable breakthroughs in fields like healthcare, finance, transportation, and more. The impact of AI is far-reaching. In healthcare, AI-powered technologies assist in diagnosing diseases, analyzing medical images, and personalizing treatment plans, ultimately improving patient outcomes. In finance, AI algorithms enable efficient fraud detection, risk assessment, and algorithmic trading, enhancing operational efficiency and reducing costs. In transportation, AI plays a vital role in autonomous vehicles, optimizing traffic management, and improving road safety.",
    },
    {
      image: news3,
      title:
        "Stepping into the Virtual Realm: Exploring the Boundless Possibilities of VR.",
      id: 6,
      detail: "Virtual Reality (VR) is a groundbreaking technology that propels us into immersive digital worlds, redefining how we experience and interact with information, entertainment, and even our own imagination. By creating simulated environments that engage our senses, VR has the power to transport us to new dimensions and revolutionize numerous sectors. VR technology enables us to transcend the limitations of physical reality and enter a realm where possibilities are limitless. Through headsets and motion-tracking systems, we can explore virtual worlds that replicate real-life settings or delve into fantastical realms that exist only in our wildest dreams. With each step, we unlock a captivating universe waiting to be discovered. The applications of VR span a multitude of industries. In gaming and entertainment, VR plunges us into immersive adventures, allowing us to become active participants in thrilling narratives and lifelike experiences. In education, VR opens doors to interactive learning, enabling students to explore historical events, visit distant lands, and comprehend complex concepts in a profoundly engaging manner.",
    },
  ];
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="relative">
          <div className="h-[500px]">
            <img
              src={news[id - 1].image}
              alt=""
              className="w-full object-cover h-[500px]"
            />
          </div>
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-40"></div>
          <div className="absolute top-0 bottom-0 right-0 left-0 text-white flex justify-center items-center text-4xl">
            <h1 className="w-1/2 text-center">{news[id - 1].title}</h1>
          </div>
        </div>
        <div className="flex justify-center mt-5"><p className="w-1/2">{news[id-1].detail}</p></div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
