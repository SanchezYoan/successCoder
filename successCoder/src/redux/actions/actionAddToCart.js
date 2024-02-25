import { ADD_TO_CART } from "../constants";

const addToCart = (course) => {
  return {
    type: ADD_TO_CART,
    course: course,
  };
};

export default addToCart;
