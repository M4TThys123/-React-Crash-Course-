import React, {useState} from "react";

function Counter() {
  const [counter, setCounter] = useState(0)
  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1)
  }

  function decrementCounter() {
    setCounter((prevCounter) => prevCounter - 1)

  }  

  return (
    <div>
      <button onClick={decrementCounter}>-</button>
      {counter}
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}
//55:30
export default Counter;

    /**
     * 1. Create a "Coutnter.jsx" Component
     * 2. Create a default `count` of 0
     * 3. Create a button to incriment `count` by 1
     * 4. Create a button to incriment `count` by 1
     * 5. Import your Counter in App.jsx and test it
     */