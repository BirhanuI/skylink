import ui from "./../assets/ui.png";
import network from "./../assets/network.png";
import data_center from "./../assets/data_center.png";
const OurService = () => {
  const service = [
    {
      icon: ui,
      title: "Website Designing",
      discription:
        "At Sky Link, we are passionate about creating stunning and functional websites that make a lasting impression. ",
    },
    {
      icon: network,
      title: "It Managment",
      discription:
        "At Sky Link, we are passionate about creating stunning and functional websites that make a lasting impression. ",
    },
    {
      icon: data_center,
      title: "Infrastructure Plan",
      discription:
        "At Sky Link, we are passionate about creating stunning and functional websites that make a lasting impression. ",
    },
    {
      icon: ui,
      title: "Website Designing",
      discription:
        "At Sky Link, we are passionate about creating stunning and functional websites that make a lasting impression. ",
    },
    {
      icon: ui,
      title: "Website Designing",
      discription:
        "At Sky Link, we are passionate about creating stunning and functional websites that make a lasting impression. ",
    },
    {
      icon: ui,
      title: "Website Designing",
      discription:
        "At Sky Link, we are passionate about creating stunning and functional websites that make a lasting impression. ",
    },
  ];
  return (
    <div className="bg-white mt-20 flex justify-center flex-col items-center">
      <div className="w-4/6">
        <h1 className="text-center text-5xl p-5 mt-10 mb-5 font-semibold text-blue-400">
          How can we assist?
        </h1>
        <p className="mb-10 text-center text-blue-400">
          We help premium brands achieve their future through innovation and
          creative perspectives. We grow your company through proprietary
          in-house ideas, tested and perfected over the years.
        </p>
            </div>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center">
          {service.map((service) => (
            <div className="bg-blue-300 p-10 rounded-2xl cursor-pointer">
              <div className="flex items-center justify-center "><img src={service.icon} alt="service icon" className="w-24"/></div>
              <div className="flex justify-center"><h1 className="text-2xl my-5">{service.title}</h1></div>
              <div className="text-center w-56 ">{service.discription}</div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default OurService;
