import React from "react";
import { connect } from "react-redux";

import {
  incrementByOneAction,
  incrementByValueAction,
  decrementByOneAction,
  decrementByValueAction,
  resetCounterAction,
} from "../../actions";

const Counter = ({
  counter = 0,
  incrementByOne,
  incrementByValue,
  decrementByOne,
  decrementByValue,
  resetCounter,
}) => {
  return (
    <>
      <div>{counter}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            incrementByOne();
          }}
        >
          +1
        </button>
        <button type="button" onClick={() => decrementByOne()}>
          -1
        </button>
      </div>
      <div>
        <button type="button" onClick={() => incrementByValue(5)}>
          +5
        </button>
        <button type="button" onClick={() => decrementByValue(5)}>
          -5
        </button>
      </div>
      <div>
        <button type="button" onClick={() => resetCounter()}>
          Reset
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  incrementByOne: () => dispatch(incrementByOneAction()),
  incrementByValue: (value) => dispatch(incrementByValueAction(value)),
  decrementByOne: () => dispatch(decrementByOneAction()),
  decrementByValue: (value) => dispatch(decrementByValueAction(value)),
  resetCounter: () => dispatch(resetCounterAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
