import PaidCourse from "../../data/PaidCourseModel";
import { ADD_TO_CART } from "../constants";

const serializePaidCourse = (course) => {
  return {
    id: course.id,
    title: course.title,
    price: course.price,
  };
};

const initialState = {
  cartCourses: [], // idCOurse, price, total
  total: 0,
};

const reducerCart = (state = initialState, action) => {
  // return state
  switch (action.type) {
    case ADD_TO_CART:
      const newCourse = serializePaidCourse(action.course);
      //   const newCourse = new PaidCourse(
      //     action.course.id,
      //     action.course.price,
      //     action.course.title
      //   );
      return {
        ...state,
        cartCourses: state.cartCourses.concat(newCourse),
        total: state.total + newCourse.price,
      };
    default:
      return initialState;
  }
};

export default reducerCart;
