import COURSES from "../../data/testData";
import { ADD_TO_CART } from "../constants";

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
    default:
      return initialState;
  }
};

export default reducerCourses;
