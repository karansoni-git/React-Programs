/*install the react-redux and @reduxjs/toolkit then import the configureStore from @reduxjs/toolkit*/
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import privacySlice from "./privacySlice";

//create a store and create a object and use it's reducer key
const counterStore = configureStore({
  //inside reducer key create a object and pass the slices that you have created and use reducer property
  reducer: {
    //here you can use any name for slice ex:- useCounterSlice, usePrivacySlice
    useCounterSlice: counterSlice.reducer,
    usePrivacySlice: privacySlice.reducer,
  },
});

//export the store
export default counterStore;
