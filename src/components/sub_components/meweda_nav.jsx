import { Link, useParams } from "react-router-dom";

const MewedaNav = () => {
  const links = [
    { title: "Articles", link: "article" },
    { title: "Engeda", link: "engeda" },
    { title: "Gubegnet", link: "gubegnt" },
    { title: "Tech +", link: "tech-plus" },
  ];
  const { meweda } = useParams();
  return (
    <div className="text-xl py-10 flex items-center ml-10 text-blue-400">
        <h1 className="text-4xl ">Meweda Online: </h1>
      <div className="">
        {links.map((item, index) => (
          <Link key={index} to={`/meweda/${item.link}`} className="">
            <span
              className={`${
                meweda == item.link ? "text-4xl" : ""
              } cursor-pointer hover:text-4xl duration-300 px-3`}
            >
              {item.title}
            </span>
            /
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MewedaNav;
