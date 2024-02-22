import reducerCourses from "./reducers/reducerCourses";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  courses: reducerCourses,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
