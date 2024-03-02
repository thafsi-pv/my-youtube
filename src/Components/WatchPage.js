import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "./Utils/sidebarSlice";
import {
  YT_VIDEO_COMMENTS,
  YT_VIDEO_DETAILS_BYID,
  YT_VIDEO_SUGGESTIONS,
} from "./Constants";
import formatDateAgo from "./Utils/formatAgo";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [suggestionList, setSuggestionList] = useState([{}]);
  const [videoDetails, setVideoDetails] = useState();
  const [videoComments, setVideoComments] = useState();
  console.log(
    "🚀 ~ file: WatchPage.js:17 ~ WatchPage ~ videoComments:",
    videoComments
  );

  useEffect(() => {
    dispatch(closeSidebar());
    handleVideoSuggestions();
    getVideoDetails();
    getVideoComments();
  }, []);

  const handleVideoSuggestions = async () => {
    const response = await fetch(YT_VIDEO_SUGGESTIONS + searchParams.get("v"));
    const data = await response.json();
    setSuggestionList(data?.items);
  };

  const getVideoDetails = async () => {
    const response = await fetch(YT_VIDEO_DETAILS_BYID + searchParams.get("v"));
    const data = await response.json();
    setVideoDetails(data?.items[0]?.snippet);
  };

  const getVideoComments = async () => {
    const response = await fetch(YT_VIDEO_COMMENTS + searchParams.get("v"));
    const data = await response.json();
    setVideoComments(data?.items);
  };

  return (
    <div className="flex items-start mt-20 w-full h-full  md:flex-row sm:flex-col">
      <div className="w-4/6 sm:w-[95%] pr-5 h-[75%] m-8 ">
        <div className="w-full h-full">
          <iframe
            className="w-full h-full"
            width="560"
            height="315"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=0&mute=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <div className="text-left py-3">
          <p className="font-semibold text-xl">{videoDetails?.title}</p>
        </div>

        {videoComments?.map((item) => (
          <div className="text-left w-full my-4">
            <div className="flex space-x-3 items-center">
              <img
                className="rounded-full h-10 w-10"
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <p className="font-semibold">
                {item.snippet.topLevelComment.snippet.authorDisplayName} <span className="text-xs text-gray-500">{formatDateAgo(item.snippet.topLevelComment.snippet.updatedAt)}</span>
                </p>
                <p className="font-normal text-sm"> {item.snippet.topLevelComment.snippet.textOriginal}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
      <div className="w-2/6 overflow-y-scroll">
        {suggestionList.map((item) => (
          <div className="flex mb-2">
            <div className="w-2/3">
              <img
                alt=""
                className="rounded-md object-fill h-20 w-full "
                src={item?.snippet?.thumbnails?.maxres?.url}
              />
            </div>
            <div className="w-[60%] p-2 text-left">
              <p className="font-medium truncate">{item?.snippet?.title}</p>
              <p className="text-xs font-medium text-slate-500">
                {item?.snippet?.channelTitle}
              </p>
              <div className="flex">
                <p className="text-xs font-medium text-slate-500">
                  2.5K Views <span className="font-bold">&nbsp; .&nbsp;</span>
                </p>
                <p className="text-xs font-medium text-slate-600">
                  12 hours ago
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
