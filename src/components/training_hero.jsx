import training from "./../assets/training.svg";
const TrainingHero = () => {
  return (
    <div className="">
      <div className="flex ">
        <div className="w-full flex flex-col justify-center text-blue-400">
          <h1 className="text-4xl font-black text-center leading-normal">
            Elevate Your Tech Skills with Expert-Led Training and Course
          </h1>
          <p className="py-10 px-16 text-center">
            Dive into cutting-edge topics and gain hands-on experience in
            coding, data science, cybersecurity, AI, and more. Our comprehensive
            curriculum, designed by industry professionals, ensures practical
            knowledge and real-world application.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <img src={training} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrainingHero;
