function Input({ onKeyDownhandler }) {
  return (
    <input
      type="text"
      placeholder="Enter Course Name"
      id="input"
      onKeyDown={onKeyDownhandler}
    />
  );
}
export default Input;
