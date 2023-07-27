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
    setVideoList(json.items);
  };

  return (
    <div className="flex columns-4 flex-wrap w-[100%] items-center  min-h-screen overflow-x-scroll pr-10 pt-10 mt-0 p-3 m-3">
      <div className="w-1/4">{videoList[0] && <AdVideoCard info={videoList[0]} />}</div>
      {videoList.map((video) => (
        <div className="w-1/4">
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
