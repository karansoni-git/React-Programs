import { useMemo, useState } from "react";
import "./App.css";
const App = () => {
  const [number, setNumber] = useState(0);
  const [double, setDouble] = useState(0);

  function expensiveDouble(num) {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  const doubleVal = useMemo(() => expensiveDouble(double), [double]);

  return (
    <>
      <h1>{number}</h1>
      <button
        id="btn"
        type="button"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Click Me
      </button>
      <input
        type="number"
        placeholder="enter number"
        id="input"
        value={double}
        autoComplete="off"
        onChange={(e) => {
          setDouble(e.target.value);
        }}
      />
      <h1>Double :{doubleVal}</h1>
    </>
  );
};

export default App;
