import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOndemandVideo,
  MdOutlineTrendingUp,
  MdMusicNote,
  MdMovie,
} from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import YTShorts from "../Assets/Img/YTShorts.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isOpen = useSelector((store) => store.sidebarToggle.isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <nav className=" p-3 flex flex-col px-2 mt-[80px] w-64  h-screen overflow-y-scroll top-20 mb-9">
      <div className="px-4">
        <Link to="/">
          <a
            href="#"
            className="flex  items-center hover:bg-slate-200 p-3 rounded-md">
            <MdHomeFilled className="h-6 w-6" />
            <span className="px-4 font-medium">Home</span>
          </a>
        </Link>
        <Link to="/dashboard">
          <a
            href=""
            className="flex items-center hover:bg-slate-200 p-3 rounded-md">
            <MdMovie className="h-6 w-6" />
            <span className="px-4 font-normal">Dashboard</span>
          </a>
        </Link>
        <a
          href="#"
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <img className="h-6 w-6" src={YTShorts} alt="" />
          <span className="px-4 font-normal">Shorts</span>
        </a>
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <MdOutlineSubscriptions className="h-6 w-6" />
          <span className="px-4 font-normal">Subtion</span>
        </a>
      </div>
      <hr></hr>

      <div className="px-4 text-left">
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <MdOutlineVideoLibrary className="h-6 w-6" />
          <span className="px-4 font-normal">Library</span>
        </a>
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <MdHistory className="h-6 w-6" />
          <span className="px-4 font-normal">History</span>
        </a>
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <MdOndemandVideo className="h-6 w-6" />
          <span className="px-4 font-normal">Your Videos</span>
        </a>
      </div>
      <hr></hr>
      <div className="p-2 text-left">
        <p className="font-normal">Subscriptions</p>
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <img
            className="h-6 w-6 rounded-full"
            src="https://yt3.ggpht.com/ytc/AL5GRJXcrhueXxa0kujKj2igxeT9S0ZFbgMxaXtXtZv8QQ=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span className="px-4 font-normal">Akshay Saini</span>
        </a>
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <img
            className="h-6 w-6 rounded-full"
            src="https://yt3.ggpht.com/3m7YWoidzuek7zpRiyFbszyDeNGiWvW2G3gu2TCx2N99i7d5AhZO6HP7PsdsyrlUQVd-eo_ZI-Q=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span className="px-4 font-normal">Sharique Samsudeen</span>
        </a>
      </div>
      <hr></hr>
      <div className="p-2 text-left">
        <p className="font-normal">Explore</p>
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <MdOutlineTrendingUp className="h-6 w-6" />
          <span className="px-4 font-normal">Trending</span>
        </a>
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <HiOutlineShoppingBag className="h-6 w-6" />
          <span className="px-4 font-normal">Shopping</span>
        </a>
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <MdMusicNote className="h-6 w-6" />
          <span className="px-4 font-normal">Music</span>
        </a>
        <a
          href=""
          className="flex items-center hover:bg-slate-200 p-3 rounded-md">
          <MdMovie className="h-6 w-6" />
          <span className="px-4 font-normal">Movies</span>
        </a>
      </div>
      <div className="p-2 m-10">
        <p className="text-sm text-slate-400">© 2023 Google LLC</p>
      </div>
    </nav>
  );
};

export default Sidebar;
