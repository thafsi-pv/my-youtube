import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "./Utils/sidebarSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="flex items-start mt-20 w-full h-full  md:flex-row sm:flex-col">
      <div className="w-4/6 sm:w-[95%] pr-5 h-screen m-8">
        <iframe
          className="w-full h-[70%]"
          width="560"
          height="315"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-2/6">
        <div className="flex">
          <div className="w-1/3">
            <img
              alt=""
              className="rounded-md object-fill "
              src="https://i.ytimg.com/vi/B7iF6G3EyIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCQ5bYWeIKByVsyt7_7QiHlo3J4Aw"
            />
          </div>
          <div className="w-[80%] p-2">
            <p className="font-medium truncate">Title</p>
            <p className="text-sm font-medium text-slate-600 pt-2">
              Channel Tile
            </p>
            <div className="flex">
              <p className="text-xs font-medium text-slate-600">
                2.5K Views <span className="font-bold">&nbsp; .&nbsp;</span>
              </p>
              <p className="text-xs font-medium text-slate-600">12 hours ago</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img
              alt=""
              className="rounded-md object-fill "
              src="https://i.ytimg.com/vi/B7iF6G3EyIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCQ5bYWeIKByVsyt7_7QiHlo3J4Aw"
            />
          </div>
          <div className="w-[80%] p-2">
            <p className="font-medium truncate">Title</p>
            <p className="text-sm font-medium text-slate-600 pt-2">
              Channel Tile
            </p>
            <div className="flex">
              <p className="text-xs font-medium text-slate-600">
                2.5K Views <span className="font-bold">&nbsp; .&nbsp;</span>
              </p>
              <p className="text-xs font-medium text-slate-600">12 hours ago</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img
              alt=""
              className="rounded-md object-fill "
              src="https://i.ytimg.com/vi/B7iF6G3EyIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCQ5bYWeIKByVsyt7_7QiHlo3J4Aw"
            />
          </div>
          <div className="w-[80%] p-2">
            <p className="font-medium truncate">Title</p>
            <p className="text-sm font-medium text-slate-600 pt-2">
              Channel Tile
            </p>
            <div className="flex">
              <p className="text-xs font-medium text-slate-600">
                2.5K Views <span className="font-bold">&nbsp; .&nbsp;</span>
              </p>
              <p className="text-xs font-medium text-slate-600">12 hours ago</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img
              alt=""
              className="rounded-md object-fill "
              src="https://i.ytimg.com/vi/B7iF6G3EyIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCQ5bYWeIKByVsyt7_7QiHlo3J4Aw"
            />
          </div>
          <div className="w-[80%] p-2">
            <p className="font-medium truncate">Title</p>
            <p className="text-sm font-medium text-slate-600 pt-2">
              Channel Tile
            </p>
            <div className="flex">
              <p className="text-xs font-medium text-slate-600">
                2.5K Views <span className="font-bold">&nbsp; .&nbsp;</span>
              </p>
              <p className="text-xs font-medium text-slate-600">12 hours ago</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img
              alt=""
              className="rounded-md object-fill "
              src="https://i.ytimg.com/vi/B7iF6G3EyIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCQ5bYWeIKByVsyt7_7QiHlo3J4Aw"
            />
          </div>
          <div className="w-[80%] p-2">
            <p className="font-medium truncate">Title</p>
            <p className="text-sm font-medium text-slate-600 pt-2">
              Channel Tile
            </p>
            <div className="flex">
              <p className="text-xs font-medium text-slate-600">
                2.5K Views <span className="font-bold">&nbsp; .&nbsp;</span>
              </p>
              <p className="text-xs font-medium text-slate-600">12 hours ago</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img
              alt=""
              className="rounded-md object-fill "
              src="https://i.ytimg.com/vi/B7iF6G3EyIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCQ5bYWeIKByVsyt7_7QiHlo3J4Aw"
            />
          </div>
          <div className="w-[80%] p-2">
            <p className="font-medium truncate">Title</p>
            <p className="text-sm font-medium text-slate-600 pt-2">
              Channel Tile
            </p>
            <div className="flex">
              <p className="text-xs font-medium text-slate-600">
                2.5K Views <span className="font-bold">&nbsp; .&nbsp;</span>
              </p>
              <p className="text-xs font-medium text-slate-600">12 hours ago</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img
              alt=""
              className="rounded-md object-fill "
              src="https://i.ytimg.com/vi/B7iF6G3EyIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCQ5bYWeIKByVsyt7_7QiHlo3J4Aw"
            />
          </div>
          <div className="w-[80%] p-2">
            <p className="font-medium truncate">Title</p>
            <p className="text-sm font-medium text-slate-600 pt-2">
              Channel Tile
            </p>
            <div className="flex">
              <p className="text-xs font-medium text-slate-600">
                2.5K Views <span className="font-bold">&nbsp; .&nbsp;</span>
              </p>
              <p className="text-xs font-medium text-slate-600">12 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
