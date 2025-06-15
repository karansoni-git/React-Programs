import Heading from "./component/Heading";
import DataTable from "./component/DataTable";
import Input from "./component/Input";
import "./App.css";
import { dataStoreContext } from "./store/Data-Item-store";
import { useState } from "react";
function App() {
  let [data, setData] = useState(["karan", "kushal", "kirtan"]);

  const addData = (dataitem) => {
    if (dataitem === "") {
      //do nothing
    } else {
      /* Functional Updates: Use 
      (existingdata) => [...existingdata , newData] 
      to avoid stale values during asynchronous 
      updates. */
      setData((current) => {
        return [...current, dataitem];
      });
    }
  };

  return (
    <dataStoreContext.Provider value={{ data, addData }}>
      <center>
        <Heading />
        <Input />
        <DataTable />
      </center>
    </dataStoreContext.Provider>
  );
}

export default App;
