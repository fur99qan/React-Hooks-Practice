import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREMENT":
      return { count: state.count - 1, showText: state.showText }
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Decrease
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;

// const [state, dispatch] = useReducer(reducer, { initial states in object form });
//define reducer function with 2 arguments:(state, action)
//make switch case block for all actions
//dispatch actions in onClick functions