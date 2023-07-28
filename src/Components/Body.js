import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex w-screen  left-0 right-0 ">
        <Sidebar className='w-2/5'/> 
        <Outlet className='flex-1'/>
    </div>
  );
};

export default Body;
