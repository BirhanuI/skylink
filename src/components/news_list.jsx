import { useState } from "react";
import news_pic from "./../assets/expo2.jpg";
import news2 from './../assets/news2.jpg'
import news3 from './../assets/news3.jpg'
import { Link } from "react-router-dom";
const NewsList = () => {




  const news = [
    {image:news_pic,title:" The Expo serves as a catalyst for collaboration and healthy competition.",id:1},
    {image:news2,title:"Skylink Technologies implanted GPS on different cars for Ethio Ceramics.",id:2},
    {image:news3,title:"Skylink Technologies is going to start Training coming soon.",id:3},
    
  ];
  return (
    <div className="bg-white text-blue-400 mb-10">
      <h1 className="text-4xl text-center p-10">Latest News</h1>
      <div className="flex gap-10 flex-wrap justify-center">
        {news.map((news, index) => (
          <Link
          to={`/news/${news.id}`}
            key={index}
          >
          <div
          
          className="w-96 overflow-hidden flex justify-center items-center flex-col hover:shadow-2xl p-5 rounded-lg duration-300 cursor transform hover:-translate-y-2"
          >
            <img src={news.image} alt="news pic" className="w-full p-5" />
            <h1 className="text-xl text-center">
             {news.title}
            </h1>
            <p className="px-5 mt-5 bg-blue-100 w-full">Dec 15, 2016</p>
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
