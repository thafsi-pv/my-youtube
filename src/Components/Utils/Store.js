import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import videoListSlice from "./videoListSlice";



const store = configureStore({
    reducer: {
        sidebarToggle: sidebarSlice,
        videoList: videoListSlice
    }
});

export default store;