import { configureStore } from "@reduxjs/toolkit";
import deviceWidthReducer from "./slices/deviceWidth.slice";

export const store = configureStore({
    reducer: {
        deviceWidth: deviceWidthReducer
    }
});