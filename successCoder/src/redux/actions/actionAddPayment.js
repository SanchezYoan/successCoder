import { ADD_PAYMENT } from "../constants";

const addPayment = (cartCourses, total) => {
  return {
    type: ADD_PAYMENT,
    orderInfos: {
      courses: cartCourses,
      total: total,
    },
  };
};

export default addPayment;
