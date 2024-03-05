import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import Button from "./Button";
import { YOUTUBE_API, YOUTUBE_VIDEO_CATEGORY_API } from "./Constants";
import { useDispatch } from "react-redux";
import { addVideo } from "./Utils/videoListSlice";

const ButtonList = () => {
  const dispatch = useDispatch()
  const [videoCategory, setVideoCategory] = useState([]);
  console.log("🚀 ~ ButtonList ~ videoCategory:", videoCategory)

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const data = await fetch(YOUTUBE_VIDEO_CATEGORY_API);
    const json = await data.json();
    setVideoCategory(json.items);
  };

  const buttonClick = async (id) => {
    console.log("button clikc")
    try {
      const data = await fetch(`${YOUTUBE_API}&videoCategoryId=${id}`);
      const json = await data.json();
      console.log("🚀 ~ getVideoList ~ json:", json);
      //setVideoList(json.items);
      dispatch(addVideo(json.items));

    } catch (error) {
      console.error("Error fetching video list:", error);
    }


  }


  return (
    // <div className="flex h-[50px] pt-4 pb-6 items-center overflow-x-hidden top-24 bg-white">
    //   {videoCategory.map((obj) => (
    //     <Button key={obj.snippet.title} name={obj.snippet.title} />
    //   ))}

    <div class="flex justify-center m-w-full w-full sticky top-12 right-0 dark:bg-gray-900">
      <div class="w-full left-0 right-0">
        <div class="flex flex-row justify-between align-middle items-center p-2">
          {/* <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
            onclick="scroll(-1)">
            <FaAngleLeft />
          </button> */}
          <div class="overflow-x-scroll flex">
            <div class="inline-flex">
              <div className="flex h-[40px] pt-4 pb-4 items-center  top-24 ">
                {videoCategory.map((obj) => (
                  <Button key={obj.snippet.title} name={obj.snippet.title} onClick={() => buttonClick(obj.id)} />
                ))}
              </div>
            </div>
          </div>
          {/* <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
            onclick="scroll(1)">
            <FaAngleRight />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
