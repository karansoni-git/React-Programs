import "./App.css";
import Button from "./Button";

function App() {
  let clickfunction1 = () => {
    document.querySelector("body").style.background = "blue";
  };

  let clickfunction2 = () => {
    document.querySelector("body").style.background = "red";
  };

  return (
    <div>
      <h1>Event</h1>
      <p>
        an event is an action that a user or system may trigger, such as
        clicking a button, typing in a form field, or loading a page. React uses
        a system similar to the browser's native event handling but with some
        differences and enhancements.
      </p>
      <button className="btn" onClick={clickfunction1}>
        Click Me
      </button>
      <p>
        In React, event names are written in camelCase (e.g., onClick, onChange,
        onSubmit) instead of lowercase like in HTML (onclick, onchange).
      </p>
      {/* here we have pass a function as a props in Button component*/}
      <Button clickfunction2={clickfunction2} />
    </div>
  );
}

export default App;
