import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../types/types";

// Initial State declaration
const initialState: number = window.innerWidth;

// createSlice section
const deviceWidthSlice = createSlice({
    name: "deviceWidth",
    initialState,
    reducers: {
        changeDeviceWidth: (state) => {
            return state = window.innerWidth;
        }
    }
});

// Selectors export
export const getDeviceWidth = (state: RootState) => state.deviceWidth;

// Actions creator export
export const { changeDeviceWidth } = deviceWidthSlice.actions;

// Reducer default export
export default deviceWidthSlice.reducer;