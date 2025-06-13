import data from "./data.json";
import { useRef, useState } from "react";
import "./App.css";
function App() {
  /* 
  useRef is another important Hook in React that allows you to create a reference to a DOM element or store a mutable value that does not cause re-render when changed.  
  
  *What is useRef?
  =>It returns a mutable ref object: { current: value }
  =>The .current property can be used to:
    Access DOM elements directly (like document.getElementById)
    Store values across renders without triggering re-renders 
    
    syntax: const refContainer = useRef(initialValue);

    ref={refContainer} attaches the DOM node to refContainer.current.
  */
  const inputRef = useRef("");
  const divRef = useRef();
  const btnRef1 = useRef();
  const btnRef2 = useRef();
  let [name, setName] = useState(data);

  const handleOnClick = () => {
    // let newData = [...name, inputRef.current.value];
    if (inputRef.current.value === "") {
      window.alert("Please Enter A Value");
      document.querySelector("input").focus();
    } else {
      for (let i = 0; i < name.length; i++) {
        if (name.includes(inputRef.current.value)) {
        } else {
          setName([...name, inputRef.current.value]);
        }
      }
    }
  };

  return (
    <div ref={divRef} className="container">
      <input type="text" ref={inputRef} placeholder="Enter a Item" />
      <br />
      <button
        type="button"
        onClick={handleOnClick}
        ref={btnRef1}
        className="button"
      >
        Add Me
      </button>
      <ul>
        {name.map((Item) => (
          <li key={Item}>{`my name is ${Item}`}</li>
        ))}
      </ul>
      <button
        type="button"
        ref={btnRef2}
        id="colorBtn"
        className="button"
        onClick={() => {
          divRef.current.style.backgroundColor = "#CA7842";
          inputRef.current.style.backgroundColor = "#4B352A";
          inputRef.current.style.color = "white";
          btnRef1.current.style.backgroundColor = "#B2CD9C";
          btnRef2.current.style.backgroundColor = "#B2CD9C";
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;
