import Input from "./components/Input";
import DataTable from "./components/DataTable";
import Container from "./components/Container";
import "./App.css";
import { useState } from "react";
function App() {
  /* useState is a React Hook that lets you declare and manage state variables in a functional component 
  syntax: const [state, setState] = useState(initialValue);
  state: The current value of the state.
  setState: A function to update the state.
  initialValue: The starting value of the state (can be any type: string, number, boolean, array, object, etc.)
  
  *Important Points
  =>You must call Hooks at the top level (not inside loops or conditions).
  =>You can use multiple useState calls in the same component.
  =>Updating state via setState triggers a re-render.
 */

  let [data, setData] = useState(["React", "Javascript", "C++"]);
  let onKeyDownhandler = (event) => {
    if (event.key === "Enter") {
      let newInput = event.target.value;
      let allData = [...data, newInput];
      if (newInput === "") {
        //do nothing
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data.includes(newInput)) {
            //do nothing
          } else {
            setData(allData);
          }
        }
      }
    }
  };

  return (
    <Container>
      <Input onKeyDownhandler={onKeyDownhandler}></Input>
      <DataTable Data={data}></DataTable>
    </Container>
  );
}

export default App;
