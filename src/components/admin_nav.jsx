import logo from "./../assets/skylink.svg";
import { MdNotificationsActive } from "react-icons/md";







import { FaRegCircleUser,FaGear } from "react-icons/fa6";
const AdminNav = () => {
  const links = [
    { title: "", link: "", icon: <MdNotificationsActive /> },
    { title: "", link: "", icon: <FaGear /> },
    { title: "", link: "", icon: <FaRegCircleUser /> },
  ];

  return (
    <div>
      <div className="px-10 pt-5 flex justify-between text-blue-400">
        <img src={logo} className="w-48" alt="skylink logo" />
        {/* <ul className="flex gap-20 items-center text-4xl">
          {links.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500 duration-300">
              {link.icon}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default AdminNav;
