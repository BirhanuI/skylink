import article from "./../assets/articles.svg";




import news_pic from "./../assets/woman.jpg";
import news2 from './../assets/AI.jpeg'
import news3 from './../assets/vr.jpg'
import { Link, Route, Routes } from "react-router-dom";
import ArticleDetail from "./meweda_article_detail";
const Articles = () => {
  
  const news = [
    {image:news3,title:"Stepping into the Virtual Realm: Exploring the Boundless Possibilities of VR.",id:1},
    {image:news_pic,title:"Empowering Women: Championing Equality and Human Rights",id:2},
    {image:news2,title:"Unleashing the Power of AI: Transforming the Future.",id:3},
    {image:news_pic,title:"Empowering Women: Championing Equality and Human Rights",id:4},
    {image:news2,title:"Unleashing the Power of AI: Transforming the Future.",id:5},
    {image:news3,title:"Stepping into the Virtual Realm: Exploring the Boundless Possibilities of VR.",id:6},
    
  ];
  return (
    <div className="w-full">
      <div className="bg-blue-400 flex justify-around items-center text-white">
        <div className="flex flex-col items-center justify-center ml-10">
          <p className="flex flex-col">
            <span className="text-3xl">Discover a World of Knowledge and Inspiration on Our Articles Page!</span>
            Sign up to get notification when new Article is available and more.
          </p>
          <div className="mt-5">
            <button className="border hover:border-red-300 hover:scale-105 px-4 rounded-md py-2 duration-500 flex items-center">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img src={article} alt="seminar image" className="h-80" />
        </div>
      </div>
      
      <div className="bg-white text-blue-400 mb-10">
      <h1 className="text-4xl text-center p-10">Latest Articles</h1>
      <div className="flex gap-10 flex-wrap justify-center">
        {news.map((news, index) => (
          <Link
          to={`/meweda/articles/${news.id}`}
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
    </div>
  );
};

export default Articles;
