import { MdAdminPanelSettings } from "react-icons/md";
const AdminLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex bg-blue-400 px-20 pb-20 gap-10 text-white rounded-xl flex-col justify-center items-center">
          <div className="text-9xl mt-10">
            <MdAdminPanelSettings />
          </div>
          <form
            action="/home"
            className="flex flex-col items-end gap-10"
            onSubmit={handleSubmit}
          >
            <div className="">
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                name="username"
                className="border outline-none text-blue-400 rounded-md px-2"
              />
            </div>
            <div className="">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                className="border outline-none text-blue-400 rounded-md px-2"
              />
            </div>
            <button
              type="submit"
              className="border px-5 py-2 rounded-md hover:bg-white hover:text-blue-400 duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
