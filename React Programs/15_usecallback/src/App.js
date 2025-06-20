/*
=>The useCallback Hook

The useCallback hook in React is used to memoize a callback function, preventing it from being recreated on every render unless its dependencies change.

=>syntax:
const memoizedCallback = useCallback(() => {
  // your callback logic
}, [dependencies]);

📌 Why use useCallback?
In React, functions are re-created on every render. If you pass these functions as props to child components, it can cause unnecessary re-renders, even if the logic inside hasn't changed.

useCallback helps avoid this by returning a memoized version of the function that only changes if its dependencies do.

1. Memoization: Preserves function across renders to prevent unnecessary re-renders.
2. Optimization: Enhances performance in components with frequent updates.
3. Dependency Array: Recreates the functiononly when specific dependencies change.
4. Event Handlers: Used to keep consistent function references for child components.
5. With useEffect: Prevents infinite loops by maintaining function references

*/
import { useCallback, useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const delayFun = useCallback(() => {
    console.log("run delayFun");
    let i;
    for (i = 0; i < 1000000000; i++) {}
    return i;
    //function will re-create only if the count variable value change.
  }, [count]);

  delayFun();

  return (
    <center>
      <h1>{count}</h1>
      <button
        type="button"
        id="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <input
        type="number"
        placeholder="Enter Number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>{number}</h1>
    </center>
  );
};

export default App;
