import { useState } from "react";

const OurTrainingApproach = () => {
  const [approchIndex, setApprochIndex] = useState(0);
  // const process = ['Assess Training Needs','Set Clear Learning Objectives','Design Engaging Content','Demonstrate and Provide Examples','Offer Opportunities for Practice','Provide Constructive Feedback'];
  const processes = [
    {
      title: "Assess Training Needs",
      discription:
        " Understand the needs and skill levels of your learners. Conduct apre-training assessment or survey to identify knowledge gaps and tailor the training content accordingly.",
    },
    { title: "Design Engaging Content", discription: "Engaging content motivates learners to actively participate in the training program. It helps create a positive learning environment and fosters a sense of curiosity, leading to higher engagement levels. When learners find the content interesting and enjoyable, they are more likely to remember and apply the knowledge effectively." },
    { title: "Demonstrate and Provide Examples", discription: "Demonstrations and examples provide clarity by showing learners how to apply theoretical concepts in practical situations. They help learners visualize and comprehend complex ideas, making the content more understandable and relatable. Learners can see how the concepts are applied in practice, which reinforces their understanding and retention of the material." },
    { title: "Offer Opportunities for Practice", discription: "Practice opportunities enable learners to develop and refine their skills. By actively engaging in tasks or simulations, learners can apply theoretical knowledge and gain practical experience, improving their competency and proficiency. Practice reinforces learning by providing learners with opportunities to repeatedly apply and review the training content. Active participation in practice activities strengthens memory retention, making the knowledge more accessible and durable." },
    { title: "Provide Constructive Feedback", discription: "Offering constructive feedback is an essential component of effective training programs. Constructive feedback helps learners understand their strengths, identify areas for improvement, and make progress in their learning journey. Constructive feedback motivates learners by acknowledging their achievements and progress. It encourages learners to continue their efforts and remain engaged in the learning process." },
  ];
  return (
    <div className="flex justify-center flex-col items-center mt-20 text-blue-400">
      <h1 className="text-4xl px-5 lg:px-0 lg:w-1/2 text-center">
        Unleashing Your Technological Potential: Our Path to Empowering You
      </h1>
      <p className="md:w-5/6 lg:w-4/6 text-center mt-16">
        At our organization, we have developed a transformative process aimed at
        empowering individuals like you to become proficient in technology. We
        believe in unlocking your true potential and guiding you along a journey
        of growth and expertise.
      </p>
      <div className="flex mt-20 mb-20">
        <div className="flex justify-center">
          <div className="text-white  border-t-2 border-l-2 border-b-2 border-blue-400  rounded-l-lg flex flex-col justify-center items-start">
            {processes.map((item, index) => (
              <h1
                key={index}
                onClick={() => {
                  setApprochIndex(index);
                }}
                className={`${
                  approchIndex == index + 1 ? "rounded-br-xl" : ""
                } ${
                  approchIndex == index - 1 ? "rounded-tr-xl " : ""
                } border-b-2 duration-300 cursor-pointer text-2xl p-5 w-full ${
                  approchIndex == index
                    ? "bg-white text-blue-400 border-white"
                    : "bg-blue-400"
                }`}
              >{`${index + 1}. ${item.title}`}</h1>
            ))}
          </div>
          <div className="bg-white lg:w-1/2 md:5/6 p-5 text-center rounded-r-lg border-t-2 border-r-2 border-b-2 border-blue-400">
            {processes[approchIndex].discription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTrainingApproach;
