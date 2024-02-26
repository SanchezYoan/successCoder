import { DELETE_TO_CART } from "../constants";

const deleteToCard = (courseId) => {
  return {
    type: DELETE_TO_CART,
    prodId: courseId,
  };
};

export default deleteToCard;
