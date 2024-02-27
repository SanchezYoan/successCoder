import { ADD_PAYMENT } from "../constants";
import moment from "moment";

const initialState = {
  payments: [],
};

const serializePayment = (id, courses, total, date) => {
  return {
    id: id,
    courses: courses,
    total: total,
    date: date,
  };
};

const reducerPayment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAYMENT:
      const newPayment = serializePayment(
        Date.now().toString(),
        action.orderInfos.courses,
        action.orderInfos.total,
        moment(new Date()).format("DD MM YYYY hh:mm")
      );
      return {
        ...state,
        payments: state.payments.concat(newPayment),
      };
    default:
      return state;
  }
};

export default reducerPayment;
