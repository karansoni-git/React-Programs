import "./App.css";
import DataTable from "./components/DataTable";
import Heading from "./components/Heading";
function App() {
  let data = ["karan", "vishal", "bhavik", "purn", "kirtan", "kushal"];

  /*In React, props (short for "properties") are a way of passing data from one component to another.
  Think of props like function arguments:
  You send data into a component by giving it props.
  Inside the component, you use those props to decide what to display or how to behave.
  *
  =>Props are read-only → You cannot change them inside the child component.
  =>They make components dynamic and reusable.
  =>Props are usually passed from parent to child component.
  */
  return (
    <>
      <Heading />
      <DataTable Data={data}></DataTable>
    </>
  );
}

export default App;
