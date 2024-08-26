import taskReducer from "./taskSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
   reducer: {
      tasks: taskReducer
   },
   
})


export default store;