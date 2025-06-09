import DataItem from "./DataItem";
function DataTable(props) {
  return (
    <ul class="list-group">
      {props.Data.map((item) => (
        <DataItem Data={item}></DataItem>
      ))}
    </ul>
  );
}

export default DataTable;
