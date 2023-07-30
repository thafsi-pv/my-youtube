import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer=()=>{
    return <div className="flex flex-col mt-12 gap-4 w-[65%]">
        <ButtonList/>
        <VideoContainer/>
    </div>
}

export default MainContainer;