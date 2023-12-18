import { Route, Routes } from "react-router-dom";
import AdminNav from "./admin_nav";
import AdminSideNav from "./admin_side_nav";
import OurSolutionDataTable from "./sub_components/our_solution_show_data";
import OurServiceDataTable from "./sub_components/our_service_show_data";
import OurManagement from "./sub_components/our_management";
import TrainingDataTable from "./sub_components/Training_show_data";

const AdminHome = () => {
  return (
    <div className="">
      <AdminNav />
      <div className="flex">
        <div className="">
          <AdminSideNav />
        </div>
        <div className="border border-r-0 border-b-0 rounded-tl-2xl h-full w-full">
          <Routes>
          <Route path="/our-solution" element={<OurSolutionDataTable />} />
          <Route path="/our-service" element={<OurServiceDataTable />} />
          {/* <Route path="/our-management" element={<OurManagement />} /> */}
          <Route path="/trainings" element={<TrainingDataTable />} />
          
          
          </Routes>
          
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
