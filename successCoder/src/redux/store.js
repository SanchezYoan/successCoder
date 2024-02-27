import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerCourses from "./reducers/reducerCourses";
import reducerCart from "./reducers/reducerCart";
import reducerPayment from "./reducers/reducerPayment";

const rootReducer = combineReducers({
  courses: reducerCourses,
  cart: reducerCart,
  payments: reducerPayment,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
