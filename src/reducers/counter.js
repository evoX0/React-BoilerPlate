import {
  DECREMENT_BY_ONE,
  DECREMENT_BY_VALUE,
  INCREMENT_BY_ONE,
  INCREMENT_BY_VALUE,
  RESET_COUNTER,
} from "../constans";

export const counterReducer = ({ type, payload }, state = 0) => {
  switch (type) {
    case INCREMENT_BY_ONE:
      return state + 1;
    case DECREMENT_BY_ONE:
      return state - 1;
    case INCREMENT_BY_VALUE:
      return state + payload;
    case DECREMENT_BY_VALUE:
      return state - payload;
    case RESET_COUNTER:
      return 0;
    default:
      return state;
  }
};
