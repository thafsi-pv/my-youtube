import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import Head from "./Head";

const Layout = () => {
  return (
    <div className="bg-neutral-100 flex flex-row h-screen w-screen overflow-hidden dark:bg-gray-900 dark:text-gray-300">
      <Head />
      <div className="flex w-screen">
        <Sidebar />
        <div className="flex-1 p-4 min-h-0 overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
