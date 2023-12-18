import { useState } from "react";
import design from "./../assets/design_training.svg";
import web_dev from './../assets/website_dev.gif'
import database from './../assets/database.gif'
import programming from './../assets/programming.gif'
import network from './../assets/networking.gif'
import computer from './../assets/computer.gif'
import maintenance from './../assets/maintenance.gif'
import system from './../assets/system.gif'
import Trainings from "./trainings";
const TrainingNav = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const training = [
    {
      title: "Graphics Design",
      header: "Unleash Your Creativity with Graphics Design Training at Skylink",
      discription:
        "Discover the power of visual storytelling through our comprehensive Graphics Design Training program. Dive into the world of design principles, color theory, typography, and layout techniques as you develop practical skills using industry-standard software. Our experienced instructors will guide you through hands-on projects, teaching you how to create captivating visuals for branding, marketing campaigns, and digital media. Whether you're a beginner or a seasoned designer, our training program at Skylink will empower you to unleash your creativity and craft stunning visuals that leave a lasting impact.",
      pic: design,
    },
    { title: "Programming", header: "Build a Solid Foundation in Programming at Skylink's Innovative Training Programs", discription: "At Skylink, we understand the importance of staying up-to-date with the latest programming languages and technologies. Our expert instructors are industry professionals who possess extensive knowledge and practical experience in the programming field. They are passionate about sharing their expertise and guiding students towards success.", pic: programming },
    { title: "Database", header: "Master the Art of Database Management", discription: "At Skylink, we understand the critical role that data plays in today's digital landscape. Our expert instructors, who possess extensive industry experience, are dedicated to imparting their knowledge and guiding you towards success.", pic: database },
    { title: "Web Development", header: "Build Interactive and Engaging Websites with Skylink's Comprehensive Development Courses", discription: "Are you ready to embark on a journey of website development and create stunning, interactive web experiences? Look no further than Skylink's dynamic website development courses. Whether you're a beginner or an aspiring web developer, our courses are designed to equip you with the skills and knowledge needed to build professional websites from scratch.", pic: web_dev },
    { title: "Network and security", header: "Master the Fundamentals of Networking and Security", discription: "Through a combination of theory and practical hands-on exercises, you'll have numerous opportunities to apply your networking skills and gain real-world experience. Our interactive learning environment fosters collaboration and knowledge sharing among students, enabling you to learn from your peers and gain valuable insights.", pic: network },
    { title: "System Administration", header: "Become a Skilled System Administrator with Skylink's Comprehensive Courses", discription: "Our interactive learning environment fosters collaboration and knowledge sharing among students, enabling you to learn from your peers and gain valuable insights. By enrolling in our system administration courses, you'll gain the necessary skills to effectively manage and maintain computer systems, ensuring their availability, reliability, and security.", pic: system },
    { title: "Basic Computers", header: "Build Essential Computer Skills with Skylink", discription: "we understand the importance of having a solid foundation in computer skills for personal and professional success. Our expert instructors are experienced in teaching computer literacy and are dedicated to providing a supportive learning environment.", pic: computer },
    { title: "Computer Maintainance", header: "Master Computer Maintenance and Optimization with Skylink", discription: " Take control of computer maintenance and optimization with Skylink's expert courses. Whether you're a novice in computer maintenance or an experienced user seeking to enhance your skills, our courses are designed to equip you with the knowledge and techniques needed to keep your computer running smoothly.", pic: maintenance },
  ];
  return (
    <div className=" mt-10 flex justify-center flex-col items-center">
      <div className=" text-white w-full">
        <div className="bg-blue-400 flex  gap-2 justify-center px-10">
          {training.map((item, index) => (
            <h1
              key={index}
              onClick={() => {
                setDataIndex(index);
              }}
              className={`text-center mt-5 rounded-t-md px-3 cursor-pointer duration-300 py-1 hover:bg-white hover:text-blue-400 ${
                index == dataIndex ? "bg-white text-blue-400" : ""
              }`}
            >
              {item.title}
            </h1>
          ))}
        </div>
      </div>
      <Trainings data={training[dataIndex]} />
    </div>
    
  );
};


export default TrainingNav;
