import icon from './../assets/company.svg'
import compony from './../assets/tech-company-animate.svg'
const Solution = () => {
  return (
    <div className="bg-blue-300 text-white flex">
      <div className=" w-full justify-center items-center flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="ml-10 text-5xl font-black text-center w-full">
          Securing the Digital Frontier
          </h1>
          <p className="text- grow text-center mt-20 w-5/6">At our tech company, we take pride in our diverse portfolio of innovative projects in software development and networking. Our skilled team of professionals has successfully delivered cutting-edge solutions that have transformed businesses across various industries. From developing scalable web applications to architecting robust network infrastructures, we have a proven track record of delivering exceptional results.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        {/* <img src={icon} alt="Desinging icon" className="w-full p-5" /> */}
        <img src={compony} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Solution;
