import { useEffect ,useState} from "react";

const Trainings = ({ data }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, [data]);
  return (
    <div className={`flex justify-center duration-500 ${animate ? " opacity-100" :"translate-y-14 opacity-0" }`}>
      <div className="w-full lg:w-5/6 flex mt-10 text-blue-400">
        <div className="w-full flex justify-center items-center">
          <img src={data.pic} alt="Designers on Work" />
        </div>
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-2xl lg:text-4xl font-black text-center leading-normal">
            {data.header}
          </h1>
          <p className="px-10 mt-10 text-center">
            {data.discription}
          </p>
          <div className="flex justify-center mt-10">
            <div className="animate-pulse hover:animate-none py-3 px-5 border border-blue-400 cursor-pointer hover:bg-blue-400 rounded-md hover:text-white duration-300">
              Enroll Now
            </div>
          </div>
        </div>
      </div>
{/*       
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 ${
          showModal ? "" : "hidden"
        }`}
        onClick={() => setShowModal(!showModal)}
      />
      <div
        className={`absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${
          showModal ? "flex" : "hidden"
        }`}
      >
        <div className="overflow-y-auto bg-white p-10 rounded-xl flex justify-center items-center flex-col">
          <div className=" flex justify-around items-center gap-10">
            <div className="flex justify-center">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                name="name"
                className="border outline-none"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                name="image"
                className="outline-none"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          
          <div
            onClick={handleSubmit}
            className={`border mt-10 px-5 py-2 rounded-md hover:border-blue-400  duration-300 cursor-pointer`}
          >
            Submit
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Trainings;
