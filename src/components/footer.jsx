import logo from "./../assets/skylink.svg";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  const icons = [
    { icon: <FaFacebookF />, name: "facebook" },
    { icon: <FaTelegramPlane />, name: "telegram" },
    { icon: <FaTwitter />, name: "twitter" },
    { icon: <FaInstagram />, name: "instagram" },
    { icon: <FaLinkedinIn />, name: "linkedIn" },
  ];
  const quick_links = [
    { title: "Location Pickups", link: "#" },
    { title: "Terms of Payment", link: "#" },
    { title: "Privacy Policy", link: "#" },
    { title: "Where to Find Us", link: "#" },
  ];
  const support = [
    { title: "Forum Support", link: "#" },
    { title: "Help & FAQ", link: "#" },
    { title: "Contact Us", link: "#" },
    { title: "Pricing and plans", link: "#" },
    { title: "Cookies Policy", link: "#" },
  ];
  const contact = [
    "Kurtu Commercial Center, 5th Floor,Office No. F509",
    "info@skylinkict.com",
    "+251911027667",
  ];
  return (
    <div className="bg-gray-200 pt-10">
      <div className="flex justify-center">
        <img src={logo} alt="sky link logo" className="hidden xl:block h-56"/>
        <div className=" xl:w-5/6 flex justify-around lg:flex-nowrap flex-wrap">
          <div className="flex flex-col p-2 lg:p-10">
            <p className="text-xl mb-5">Quick Links</p>
            {quick_links.map((data,index) => (
              <a key={index} href={data.link} className="mb-2">
                {data.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col lg:p-10 p-2">
            <p className="text-xl mb-5">Support</p>
            {support.map((data,index) => (
              <a key={index} href={data.link} className="mb-2">
                {data.title}
              </a>
            ))}
          </div>
          <div className="p-2 lg:p-10">
            <p className="text-xl mb-5">Contact US</p>
            {contact.map((data) => (
              <p key={data} className="mb-5">{data}</p>
            ))}
            <div className="flex">
              {icons.map((icon,index) => (
                <div key={index} className="text-lg m-2 rounded-full border border-gray-400 hover:border-none  p-4 hover:bg-blue-400 hover:text-white duration-300">
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around mt-20 p-5 bg-gray-300">
        <div className="">
          © 2023 Sky Link Technologies PLC. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
