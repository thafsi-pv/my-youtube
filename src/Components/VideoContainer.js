import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "./Constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log("🚀 ~ file: VideoContainer.js:17 ~ getVideoList ~ json:", json)
    setVideoList(json.items);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 flex-row flex-wrap justify-center items-center w-full overflow-y-scroll">
      <div className="">{videoList[0] && <AdVideoCard info={videoList[0]} />}</div>
      {videoList.map((video) => (
        <div className="">
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
