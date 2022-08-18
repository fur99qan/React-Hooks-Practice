//declare array with state-variable and its function

import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Initial State");
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  let onChange = (event) => {
    // const newValue = event.target.value;
    //setInputValue(newValue);

    //event -> Change in input box
    //event.target.value -> value in input box after event

    setInputValue(event.target.value);
  };

  return (
    <div>

      <input placeholder="enter something..." onChange={onChange} />
      <br />
      {inputValue}
      <br />

      <h1>{counter}</h1>
      <br />
      <button onClick={incrementCounter}>increase count</button>

    </div>
  );
};

export default StateTutorial;

