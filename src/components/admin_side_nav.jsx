import { Link } from "react-router-dom";

const AdminSideNav = () => {
  const links = [
    { title: "News", link: "news", subLinks: [{ title: "", link: "" }] },
    { title: "Trainings", link: "trainings", subLinks: [{ title: "", link: "" }] },
    { title: "Contact", link: "contact", subLinks: [{ title: "", link: "" }] },
    {
      title: "",
      link: "#",
      subLinks: [
        { title: "Our Solutions", link: "our-solution" },
        { title: "Our Services", link: "our-service" },
        // { title: "Managment Team", link: "our-management" },
      ],
    },
  ];

  return (
    <div className="flex justify-center ">
      <div className="relative p-20 mr-5 text-blue-400 text-2xl flex flex-col gap-5 items-center justify-center w-72">
        {links.map((link, index) => (
          <div key={index} className="cursor-pointer duration-150">
            <h1 className="hover:text-blue-500 w-72 text-center">
              <Link to={link.link}>{link.title}</Link>
            </h1>
            <div className="hidde">
              {link.subLinks.map((subLink, index) => (
                <h2 key={index} className="text-center">
                 <Link to={subLink.link}>{subLink.title}</Link>
                </h2>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSideNav;
