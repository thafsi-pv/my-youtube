import { createSlice } from "@reduxjs/toolkit";

const videoListSlice = createSlice({
    name: "sidebar",
    initialState: {
        videoList: []
    },
    reducers: {
        addVideo: (state, action) => {
            state.videoList = (action.payload);
        },
    },
});

export const { addVideo } = videoListSlice.actions;

export default videoListSlice.reducer;
