import DataItem from "./DataItem";
import { useContext } from "react";
import { dataStoreContext } from "../store/Data-Item-store";

function DataTable() {
  let { data } = useContext(dataStoreContext);
  return (
    <ul className="list-group">
      {data.map((item) => (
        <DataItem key={item} item={item} />
      ))}
    </ul>
  );
}

export default DataTable;
