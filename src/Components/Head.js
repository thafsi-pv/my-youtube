import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import YouTubeLogo from "../Assets/Img/YouTubeLogo.png";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./Utils/sidebarSlice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_API, YT_SEARCH_API } from "./Constants";
import { CiSearch } from "react-icons/ci";
import { addVideo } from "./Utils/videoListSlice";
import ytlogo from '../Assets/Img/ytLogo.svg'

const Head = () => {
  const [showList, setShowList] = useState(false)
  const [searchQuery, setSerachQuery] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  console.log("🚀 ~ file: Head.js:15 ~ Head ~ suggestion:", suggestion.length);
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
    setSuggestion(json[1]);
  };
  const searchVideo = async () => {
    const data = await fetch(`${YT_SEARCH_API}&q=${searchQuery}`);
    const json = await data.json();
    console.log("🚀 ~ searchVideo ~ json:", json)
    dispatch(addVideo(json.items));
  };

  const suggestionClick = (q) => {
    console.log("🚀 ~ suggestionClick ~ q:", q)
    setSerachQuery(q)
    setSuggestion([])
    searchVideo()
    setShowList(false)
  }

  return (
    <div className="grid grid-flow-col h-16  mb-3 absolute top-0  w-screen  left-0 right-0 dark:bg-gray-900">
      <div className=" flex p-1 items-center">
        <div className="px-3 ">
          <RxHamburgerMenu
            className="h-10 w-10 px-2 hover:bg-slate-200 cursor-pointer  rounded-full"
            onClick={handleSidebar}
          />
        </div>
        <div className="flex relative">
          <Link to='/'>
            <img
              href="/"
              className="w-24 h-5 cursor-pointer"
              src={ytlogo}
              alt="Youtubelogo"
            /></Link>
          <p className="text-xs px-1 font-normal right-0 top-0 text-[7px]">
            IN
          </p>
        </div>
      </div>
      <div className="col-span-5 py-1 w-3/5 flex">
        <div className="col-span-5 py-3 w-full flex relative">
          <input
            type="text"
            className="border border-[#282828] w-full rounded-l-full py-3 h-10 px-3 outline-none relative dark:bg-gray-900"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => { setSerachQuery(e.target.value); setShowList(true) }}
            onFocus={(e) => setSerachQuery(e.target.value)}
          // onBlur={(e) => setSuggestion([])}
          />
          <button className="border border-[#282828] rounded-r-full p-1 h-10 px-4 dark:bg-[#282828]">
            <FiSearch />
          </button>
          {suggestion.length !== 0 && (
            <div className="dark:bg-gray-900 border-[#282828]  w-[93%] rounded-md z-20  mt-10 absolute border">
              <ul classNmae="divide-y divide-gray-100">
                {showList && suggestion &&
                  suggestion?.map((s) => {
                    return (
                      <li
                        onClick={() => suggestionClick(s)}
                        key={s}
                        class="py-2 hover:bg-gray-700 px-3 flex items-center z-50 cursor-pointer">
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
