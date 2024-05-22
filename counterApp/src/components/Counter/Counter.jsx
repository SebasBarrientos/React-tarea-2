import { useState } from "react";

const Counter = ({initialState, valorDeSuma}) => {

    const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
    console.log(counter)
  };
  const decrement = () => {
    setCounter(counter - 1);
    console.log(counter)
  };

  const incrementInDeterminedvalor = () => {
    setCounter(counter + valorDeSuma);
    console.log(counter)
  };
  
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementInDeterminedvalor}>Sumar de a {valorDeSuma}</button> 
      <span>{counter} </span>
    </div>
  );
};

export default Counter;