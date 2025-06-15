import { useContext, useRef } from "react";
import { dataStoreContext } from "../store/Data-Item-store";

function Input() {
  let { addData } = useContext(dataStoreContext);
  let inputRef = useRef("");
  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      addData(e.target.value);
      inputRef.current.value = "";
    }
  };
  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Enter a your data"
      onKeyDown={handleOnKeyDown}
      id="input"
    />
  );
}
export default Input;
