import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import userReducer from "./redux/slices/userProfile/profileSlice";
import slices from "./redux/slices/index";

const persistConfig = {
  key: "root",
};
const rootReducer = combineReducers(slices);

// const persistedReducer = (persistConfig, rootReducer);

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
console.log(appStore);
export default appStore;
