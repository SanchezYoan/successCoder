import COURSES from "../../data/testData";
import { ADD_TO_CART, DELETE_TO_CART } from "../constants";

const initialState = {
  existingCourses: COURSES,
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const indexCourseModify = state.existingCourses.findIndex(
        (course) => course.id === action.course.id
      );
      const updatedCourses = state.existingCourses.map((course, index) => {
        if (index === indexCourseModify) {
          return {
            ...course,
            selected: true,
          };
        }
        return course;
      });
      return {
        ...state,
        existingCourses: updatedCourses,
      };
    case DELETE_TO_CART:
      const indexToDeleteFromCart = state.existingCourses.findIndex(
        (course) => course.id === action.prodId
      );
      if (indexToDeleteFromCart !== -1) {
        const updatedExistingCourses = [...state.existingCourses];
        updatedExistingCourses[indexToDeleteFromCart] = {
          ...updatedExistingCourses[indexToDeleteFromCart],
          selected: false,
        };

        return {
          ...state,
          existingCourses: updatedExistingCourses,
        };
      }
    default:
      return state;
  }
};

export default reducerCourses;
