import { Link } from "react-router-dom";

const NavOurService = () => {
  return (
    <div className="relative flex justify-center z-50">
      <div className="bg-blue-400 text-white mx-2 rounded-b-xl p-10 shadow-2xl absolute left-0 right-0">
        <Link to="/services">
        <div className="flex justify-around gap-5 leading-loose">
          <div className="border-r pr-5">
            <h1 className="text-xl mb-5">software development</h1>{" "}
            <h1 className="">Website design and Development</h1>
            <h1 className="">Website Hosting and Email Hosting</h1>
            <h1 className="">Mobile App Development</h1>
          </div>
          <div className="border-r pr-5">
            <h1 className="text-xl mb-5">Networking</h1>
            <h1 className="">Network Installation</h1>
            <h1 className="">Datacenter Solution</h1>
            <h1 className="">Computer Repair and Maintenance</h1>
            <h1 className="">
              CCTV camera and Video Surveillance system installation
            </h1>
          </div>
          <div className="">
            <h1 className="text-xl mb-5">Trainings</h1>
            <h1 className="">Computer Basics</h1>
            <h1 className="">Network and Security</h1>
            <h1 className="">Graphic Design</h1>
          </div>
        </div></Link>
      </div>
    </div>
  );
};

export default NavOurService;
