import { useEffect, useState } from "react";

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

    <div class="flex justify-center w-5/6">
      <div class="w-6/6 sm:w-2/3 lg:w-1/2">
        <div class="flex flex-row justify-between items-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
            onclick="scroll(-1)"
          >
            &lt;
          </button>
          <div class="overflow-x-scroll flex">
            <div class="inline-flex">
              <div className="flex h-[50px] pt-4 pb-6 items-center  top-24 bg-white">
                {videoCategory.map((obj) => (
                  <Button key={obj.snippet.title} name={obj.snippet.title} />
                ))}
              </div>
            </div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
              onclick="scroll(1)"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
