import { useEffect, useState } from "react";
import "./App.css";

/* 
=>What is useEffect?
useEffect is a React Hook that runs side effects in your component — things like:
->API calls
->DOM manipulation
->Subscriptions
->Timers
->LocalStorage/sessionStorage actions
->Logging

=>Syntax: 
useEffect(() => {
// Side effect logic

return () => {
// Cleanup logic (optional)
};

}, [dependencies]);
 */
function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("number is changed");
  }, [number]);

  return (
    <center>
      <h1>{number}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        Decrement
      </button>
    </center>
  );
}

export default App;
