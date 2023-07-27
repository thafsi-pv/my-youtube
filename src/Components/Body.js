import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex max-w-[90%] ">
        <Sidebar />
        <Outlet/>
    </div>
  );
};

export default Body;
