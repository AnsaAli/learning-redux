import { configureStore } from "@reduxjs/toolkit";
import reducer from "./AddSubCounterReducer";

const AddSubStore = configureStore({
    reducer : reducer
})

export default AddSubStore;