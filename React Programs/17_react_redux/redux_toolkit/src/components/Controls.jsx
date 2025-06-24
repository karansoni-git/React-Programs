import { RiEyeCloseLine } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counterSlice";
import { privacyAction } from "../store/privacySlice";

const Controls = () => {
  //destructure the privacyVal from usePrivacySlice of store
  const { privacyVal } = useSelector((store) => store.usePrivacySlice);
  const inputRef = useRef("");
  const dispatch = useDispatch();

  const handleIcrement = () => {
    //dispatch the specific action of specific slice
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    //dispatch the specific action of specific slice
    dispatch(counterAction.decrement());
  };
  const handleReset = () => {
    //dispatch the specific action of specific slice
    dispatch(counterAction.reset());
  };

  const handleAddition = () => {
    //dispatch the specific action of specific slice
    //passing the value to the action method consider as a payload value
    dispatch(counterAction.addition(inputRef.current.value));
    inputRef.current.value = "";
  };

  const handleSubtract = () => {
    //dispatch the specific action of specific slice
    //passing the value to the action method consider as a payload value
    dispatch(counterAction.subtract(inputRef.current.value));
    inputRef.current.value = "";
  };

  const handlePrivacy = () => {
    //dispatch the specific action of specific slice
    dispatch(privacyAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-success btn-lg px-2 gap-3"
          onClick={handleIcrement}
          disabled={privacyVal}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg px-2"
          onClick={handleDecrement}
          disabled={privacyVal}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-dark btn-lg px-2"
          onClick={handleReset}
          disabled={privacyVal}
        >
          Reset
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center operationBtns">
        <input
          type="number"
          placeholder="Enter Number"
          id="numInput"
          ref={inputRef}
          disabled={privacyVal}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg px-2"
          onClick={handleAddition}
          disabled={privacyVal}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-2"
          onClick={handleSubtract}
          disabled={privacyVal}
        >
          Subtract
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center operationBtns">
        <button
          type="button"
          className="btn btn-primary btn-lg px-5"
          onClick={handlePrivacy}
        >
          {privacyVal ? <RiEyeCloseLine /> : <RxEyeOpen />}
        </button>
      </div>
    </>
  );
};

export default Controls;
