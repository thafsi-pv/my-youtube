import { useEffect, useState } from "react";
import {
  YOUTUBE_CHANNEL_LOGO_API,
  YOUTUBE_CHANNEL_LOGO_API_PART2,
} from "./Constants";
import { formatVideoCount } from "./Utils/formatCount";
import formatDateAgo from "./Utils/formatAgo";

const VideoCard = ({ info }) => {
  console.log("🚀 ~ file: VideoCard.js:9 ~ VideoCard ~ info:", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, channelId, publishedAt } = snippet;
  const [channelLog, setChannelLog] = useState();

  useEffect(() => {
    getChannelLogo();
  }, []);

  const getChannelLogo = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_LOGO_API + channelId + YOUTUBE_CHANNEL_LOGO_API_PART2
    );
    const json = await data.json();
    setChannelLog(json.items[0].snippet.thumbnails.default.url);
  };

  return (
    <div className="flex flex-col pb-3 w-full my-3 px-2 justify-between">
      <div className="flex flex-col">
        <div>
          <img
            src={thumbnails.medium.url}
            className="rounded-xl object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="flex items-center">
          <div className="w-[15%] m-2">
            <img src={channelLog} className="w-10 h-10 rounded-full" alt="" />
          </div>
          <div className="w-[80%] pt-2 text-left">
            <p className="font-normal truncate">{title}</p>
            <p className="text-sm font-normal text-slate-600">{channelTitle}</p>
            <div className="flex items-center align-middle">
              <p className="text-sm font-normal text-slate-600">
                {formatVideoCount(statistics.viewCount)} views{" "}
                <span className="font-bold">&nbsp; .&nbsp;</span>
              </p>
              <p className="text-sm font-normal text-slate-600">
                {formatDateAgo(publishedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-700">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
