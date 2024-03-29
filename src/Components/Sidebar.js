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
import YTShorts from "../Assets/Img/shortsLogo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isOpen = useSelector((store) => store.sidebarToggle.isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <nav className=" p-3 md:flex flex-col px-2 mt-[80px] w-54  h-screen overflow-y-scroll top-20 mb-9 hidden">
      <div className="px-4 border-b border-gray-600">
        <Link to="/">
          <a
            href="/"
            className="flex  items-center hover:bg-slate-800 p-3 rounded-md">
            <MdHomeFilled className="h-6 w-6" />
            <span className="px-4 font-normal">Home</span>
          </a>
        </Link>
        <Link to="/">
          <a
            href="/"
            className="flex items-center hover:bg-slate-800 p-3 rounded-md">
            <MdMovie className="h-6 w-6" />
            <span className="px-4 font-normal text-sm">Dashboard</span>
          </a>
        </Link>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <img className="h-6 w-6 " src={YTShorts} alt="" />
          <span className="px-4 font-normal text-sm">Shorts</span>
        </a>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <MdOutlineSubscriptions className="h-6 w-6" />
          <span className="px-4 font-normal text-sm">Subtion</span>
        </a>
      </div>

      <div className="px-4 text-left border-b border-gray-600">
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <MdOutlineVideoLibrary className="h-6 w-6" />
          <span className="px-4 font-normal text-sm">Library</span>
        </a>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <MdHistory className="h-6 w-6" />
          <span className="px-4 font-normal text-sm">History</span>
        </a>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <MdOndemandVideo className="h-6 w-6" />
          <span className="px-4 font-normal text-sm">Your Videos</span>
        </a>
      </div>
      <div className="p-2 text-left border-b border-gray-600">
        <p className="font-normal text-sm">Subscriptions</p>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <img
            className="h-6 w-6 rounded-full"
            src="https://yt3.googleusercontent.com/ytc/AIdro_kvCRmW8z38ccUGXzs2jPGC7-LTaV7n-nZBhERSMQ=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span className="px-4 font-normal text-sm">Debug Media</span>
        </a>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <img
            className="h-6 w-6 rounded-full"
            src="https://yt3.ggpht.com/3m7YWoidzuek7zpRiyFbszyDeNGiWvW2G3gu2TCx2N99i7d5AhZO6HP7PsdsyrlUQVd-eo_ZI-Q=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span className="px-4 font-normal text-sm truncate">Sharique Samsudeen</span>
        </a>
      </div>
      <div className="p-2 text-left">
        <p className="font-normal text-sm">Explore</p>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <MdOutlineTrendingUp className="h-6 w-6" />
          <span className="px-4 font-normal text-sm">Trending</span>
        </a>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <HiOutlineShoppingBag className="h-6 w-6" />
          <span className="px-4 font-normal text-sm">Shopping</span>
        </a>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <MdMusicNote className="h-6 w-6" />
          <span className="px-4 font-normal text-sm">Music</span>
        </a>
        <a
          href="/"
          className="flex items-center hover:bg-slate-800 p-3 rounded-md">
          <MdMovie className="h-6 w-6" />
          <span className="px-4 font-normal text-sm">Movies</span>
        </a>
      </div>
      <div className="p-2 m-2 absolute bottom-0">
        <p className="text-sm text-slate-400">© 2023 Google LLC</p>
      </div>
    </nav>
  );
};

export default Sidebar;
