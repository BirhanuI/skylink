import { Link, useParams } from "react-router-dom";

const EventNav = () => {






const {event} = useParams();
  return (
    <div className="text-xl py-10 flex items-center justify-center ">
      <Link to={'/events/expo'}><span className={`${event == 'expo'?"text-4xl":""} cursor-pointer hover:text-4xl duration-300`}>EXPO</span></Link> / <Link to={'/events/seminar'}><span className={`${event == 'seminar'?"text-4xl":""} cursor-pointer hover:text-4xl duration-300`}>SEMINAR</span></Link>
    </div>
  );
};

export default EventNav;
