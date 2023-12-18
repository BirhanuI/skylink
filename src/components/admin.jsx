import { Routes,Route } from "react-router-dom";
import AdminLogin from "./admin_login";
import AdminHome from "./admin_home";

const Admin = () => {
  return <div className="">
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/dashboard/*" element={<AdminHome />} />
    </Routes>
  </div>;
};

export default Admin;
