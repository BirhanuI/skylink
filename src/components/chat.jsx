import { IoChatboxEllipses } from "react-icons/io5";
const Chat = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50  m-20 ">
      {/* <IoChatboxEllipses className="text-5xl text-blue-300 cursor-pointer" /> */}

      <div className="flex flex-col items-center relative cursor-pointer">
        <p>Contact Us </p>
        <div className="bg-blue-500 px-5 py-2 text-white rounded-xl">
          On Telegram
        </div>
        <div className="absolute w-4 h-4 rounded-full bg-red-500 right-0 animate-ping"></div>
      </div>
    </div>
  );
};

export default Chat;
