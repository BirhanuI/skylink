import image from "./../assets/project1.png";
import elida from './../assets/elida.png'
import afar from './../assets/afar.png'
import museum from './../assets/museum.png'
const ProjectsDone = () => {
  const data = [
    { title: "Bilalul Habeshi archive system", image: image, discription: "Digital museums disseminated over technology platforms and social networks are fast becoming the norm. But they raise a number of legal issues ranging from copyright to image rights and data protection to contract law. Copyright, in particular, plays a key role in that it governs whether and how content can be used." },
    { title: "Elida Ethiopia Website", image: elida, discription: "ELiDA aspires to see socially responsible, economically independent and productive women, Girls and Youth who are protected from human rights violation and empowered to contribute to sustainable development, peace and strong democratic culture." },
    { title: "Afar Website", image: afar, discription: "Afar website is one of dynamic website.It is multilingual web application with 90 % of the content is managed through a Content Management System, so that the content can easily be updated by any of the staffs of the organization. The website is responsive to any mobile or tablet devices and very attractive and has common features such as News, Tender and Vacancy announcements, portfolios, and so on." },
    { title: "Bilalul Habeshi Virtual Museum", image: museum, discription: "A virtual tour is a simulation of an existing location, usually composed of a sequence of video or still images. It may also use other multimedia elements such as sound effects, music, narration, and text. It is distinguished from the use of live television to effect tel-tourism." },
  ];
  return (
    <div className="text-blue-400">
      <h1 className="py-16 text-4xl text-center">
        Projects Done by Skylink Technologies
      </h1>
      {data.map((item, index) => {
        if (index % 2 == 0) {
          return (
            <div className="flex">
              <div className="w-full">
                <img src={item.image} alt="pic" className="object-cover" />
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-3xl text-center mb-8">
                  {item.title}
                </h1>
                <p className="w-5/6">
                  {item.discription}
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex">
              <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-3xl text-center mb-8">
                  {item.title}
                </h1>
                <p className="w-5/6">
                  {item.discription}
                </p>
              </div>
              <div className="w-full">
                <img src={item.image} alt="pic" className="object-cover" />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProjectsDone;
