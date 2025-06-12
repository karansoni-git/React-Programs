function DataItem({ Item }) {
  return (
    <>
      <li className="list-group-item">
        {Item}
        <button>Delete</button>
      </li>
    </>
  );
}
export default DataItem;
