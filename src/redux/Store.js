import { configureStore } from "@reduxjs/toolkit";
import TodoSlicer from "./reducer/TodoSlicer";
const Store = configureStore({
    reducer :TodoSlicer,
})
export default Store;

