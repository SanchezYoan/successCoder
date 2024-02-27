import { ADD_PAYMENT, ADD_TO_CART, DELETE_TO_CART } from "../constants";

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
      return {
        ...state,
        cartCourses: state.cartCourses.concat(newCourse),
        total: state.total + newCourse.price,
      };
    case DELETE_TO_CART:
      const indexResult = state.cartCourses.findIndex(
        (course) => course.id === action.prodId
      );

      const newCartCourse = [...state.cartCourses];
      newCartCourse.splice(indexResult, 1);

      const coursePrice = state.cartCourses[indexResult].price;

      return {
        ...state,
        cartCourses: newCartCourse,
        total: state.total - coursePrice,
      };

    case ADD_PAYMENT:
      return initialState;

    default:
      return initialState;
  }
};

export default reducerCart;
