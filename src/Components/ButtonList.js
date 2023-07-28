import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import Button from "./Button";
import { YOUTUBE_VIDEO_CATEGORY_API } from "./Constants";

const ButtonList = () => {
  const [videoCategory, setVideoCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const data = await fetch(YOUTUBE_VIDEO_CATEGORY_API);
    const json = await data.json();
    setVideoCategory(json.items);
  };

  return (
    // <div className="flex h-[50px] pt-4 pb-6 items-center overflow-x-hidden top-24 bg-white">
    //   {videoCategory.map((obj) => (
    //     <Button key={obj.snippet.title} name={obj.snippet.title} />
    //   ))}

    <div class="flex justify-center w-[99%] left-0 right-0">
      <div class="w-full left-0 right-0">
        <div class="flex flex-row justify-between align-middle items-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
            onclick="scroll(-1)">
            <FaAngleLeft />
          </button>
          <div class="overflow-x-scroll flex">
            <div class="inline-flex">
              <div className="flex h-[50px] pt-4 pb-6 items-center  top-24 bg-white">
                {videoCategory.map((obj) => (
                  <Button key={obj.snippet.title} name={obj.snippet.title} />
                ))}
              </div>
            </div>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
            onclick="scroll(1)">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
