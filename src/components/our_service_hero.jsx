import icon from './../assets/design_our_service.svg'
const OurServiceHero = () => {
  return (
    <div className="bg-blue-300 text-white flex">
      <div className=" w-full justify-center items-center flex flex-col">
        <div className="flex flex-col items-center">
        <h1 className="text-5xl font-black text-center w-full">Website Design and Development</h1>
        <p className="text-xl grow text-center mt-20 w-5/6">
          Providing professional, creative, cheap and affordable website design
          and development services that will add values to your organization and
          expose your business to the market.
        </p>
        </div>
      </div>
      <div className="w-full h-full">
        <img src={icon} alt="Desinging icon" className='w-full p-5'/>
      </div>
    </div>
  );
};

export default OurServiceHero;
