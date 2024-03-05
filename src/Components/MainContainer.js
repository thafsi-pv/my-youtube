import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer=()=>{
    return <div className="flex flex-col mt-12 gap-1 w-full ">
        <ButtonList/>
        <VideoContainer/>
    </div>
}

export default MainContainer;