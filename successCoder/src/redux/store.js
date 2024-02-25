import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerCourses from "./reducers/reducerCourses";
import reducerCart from "./reducers/reducerCart";

const rootReducer = combineReducers({
  courses: reducerCourses,
  cart: reducerCart,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
