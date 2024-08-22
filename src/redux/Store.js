import { configureStore  } from "@reduxjs/toolkit";
import CountReducer from "./CountReducer";


const Store = configureStore({
    reducer: CountReducer
});

export default Store;