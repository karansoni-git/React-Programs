import DataItem from "./DataItem";
function DataTable({ Data }) {
  return (
    <ul className="list-group">
      {Data.map((item) => (
        <DataItem Item={item} key={item}></DataItem>
      ))}
    </ul>
  );
}

export default DataTable;
