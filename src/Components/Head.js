import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import YouTubeLogo from "../Assets/Img/YouTubeLogo.png";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./Utils/sidebarSlice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "./Constants";
import { CiSearch } from "react-icons/ci";

const Head = () => {
  const [searchQuery, setSerachQuery] = useState([]);
  const [suggestion, setSuggestion] = useState();
  console.log("🚀 ~ file: Head.js:15 ~ Head ~ suggestion:", suggestion);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchsuggestion();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchsuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    console.log("🚀 ~ file: Head.js:35 ~ getSearchsuggestion ~ json:", json);
    setSuggestion(json[1]);
  };

  return (
    <div className="grid grid-flow-col h-16  mb-3 absolute top-0  w-screen bg-white left-0 right-0">
      <div className=" flex p-1 items-center">
        <div className="px-3 ">
          <RxHamburgerMenu
            className="h-10 w-10 px-2 hover:bg-slate-200 cursor-pointer  rounded-full"
            onClick={handleSidebar}
          />
        </div>
        <div className="flex relative">
          <img
            href="/"
            className="w-24 h-5 cursor-pointer"
            src={YouTubeLogo}
            alt="Youtubelogo"
          />
          <p className="text-xs px-1 font-normal right-0 top-0 text-[9px]">
            IN
          </p>
        </div>
      </div>
      <div className="col-span-5 py-1 w-4/5 flex">
        <div className="col-span-5 py-3 w-full flex relative">
          <input
            type="text"
            className="border border-slate-400 w-full rounded-l-full py-3 h-10 px-3 outline-none relative"
            placeholder="Search"
            onChange={(e) => setSerachQuery(e.target.value)}
            onFocus={(e) => setSerachQuery(e.target.value)}
            onBlur={(e) => setSuggestion([])}
          />
          <button className="border border-slate-400 rounded-r-full p-1 h-10 px-4 bg-slate-100">
            <FiSearch />
          </button>
          {suggestion.length > 0 && (
            <div className="bg-white  w-[93%] rounded-md z-20  mt-10 absolute border">
              <ul classNmae="divide-y divide-gray-100">
                {suggestion &&
                  suggestion.map((s) => {
                    return (
                      <li
                        key={s}
                        class="py-2 hover:bg-gray-100 px-3 flex items-center ">
                        <CiSearch className="mr-2" />
                        {s}
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end px-4 pt-4">
        <RxAvatar className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Head;
