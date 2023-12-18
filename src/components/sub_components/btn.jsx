const Btn = ({ options }) => {
  return <div className="border-2 inline-block px-5 py-2 rounded-md hover:bg-blue-300 duration-500 cursor-pointer">
    {options.title}
  </div>;
};

export default Btn;
