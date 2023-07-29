import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer=()=>{
    return <div className="flex flex-col gap-4 mt-16 w-[63%]">
        <ButtonList/>
        <VideoContainer/>
    </div>
}

export default MainContainer;