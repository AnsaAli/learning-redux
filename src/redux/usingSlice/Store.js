import { configureStore } from "@reduxjs/toolkit";
import CountReducer from './CountSlice'

const Store = configureStore({
    reducer:{
       counter: CountReducer
    }
});

export default Store;