import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth"
import restaurant from "./slices/restaurant";

//combine reducer alternative
export default configureStore({
    reducer:{
        auth,
        restaurant
    }
})