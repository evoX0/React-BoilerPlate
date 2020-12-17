import {
  DECREMENT_BY_ONE,
  DECREMENT_BY_VALUE,
  INCREMENT_BY_ONE,
  INCREMENT_BY_VALUE,
  RESET_COUNTER,
} from "../constans";

export const incrementByOneAction = () => ({
  type: INCREMENT_BY_ONE,
});

export const decrementByOneAction = () => ({
  type: DECREMENT_BY_ONE,
});

export const incrementByValueAction = (payload) => ({
  type: INCREMENT_BY_VALUE,
  payload,
});

export const decrementByValueAction = (payload) => ({
  type: DECREMENT_BY_VALUE,
  payload,
});

export const resetCounterAction = () => ({
  type: RESET_COUNTER,
});
