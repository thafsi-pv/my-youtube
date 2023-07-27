import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";



const store=configureStore({
    reducer:{
    sidebarToggle:sidebarSlice
    }
});

export default store;