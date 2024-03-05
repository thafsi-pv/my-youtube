import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "./Constants";
import { addVideo } from "./Utils/videoListSlice";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  // const [videoList, setVideoList] = useState([]);
  const dispatch = useDispatch()
  const videoList = useSelector((store) => store.videoList)
  console.log("🚀 ~ VideoContainer ~ videoLists:", videoList)

  useEffect(() => {
    const getVideoList = async () => {
      try {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        console.log("🚀 ~ getVideoList ~ json:", json);
        //setVideoList(json.items);
        dispatch(addVideo(json.items));

      } catch (error) {
        console.error("Error fetching video list:", error);
      }
    };
    getVideoList();
  }, [dispatch]);

  if (videoList.length === 0) {
    console.log("🚀 ~ VideoContainer ~ videoList.length:", videoList.length)
    return (<div>Loading...</div>)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 flex-row flex-wrap justify-center items-center w-full overflow-y-scroll">
      {/* <div className="">{videoList[0] && <AdVideoCard info={videoList[0]} />}</div> */}
      {videoList?.videoList?.map((video) => (
        <div className="">
          <Link key={video.id} to={"/watch?v=" + (video?.id.videoId ? video?.id.videoId : video?.id)}>
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
