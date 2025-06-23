import { RiEyeCloseLine } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Controls = () => {
  const privacy = useSelector((store) => store.privacy);
  const inputRef = useRef("");
  const dispatch = useDispatch();

  const handleIcrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddition = () => {
    dispatch({
      type: "ADDITION",
      payload: {
        value: inputRef.current.value,
      },
    });
    inputRef.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        value: inputRef.current.value,
      },
    });
    inputRef.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY_BUTTON" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-success btn-lg px-4 gap-3"
          onClick={handleIcrement}
          disabled={privacy}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg px-4"
          onClick={handleDecrement}
          disabled={privacy}
        >
          Decrement
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center operationBtns">
        <input
          type="number"
          placeholder="Enter Number"
          id="numInput"
          ref={inputRef}
          disabled={privacy}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg px-2"
          onClick={handleAddition}
          disabled={privacy}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-2"
          onClick={handleSubtract}
          disabled={privacy}
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
          {privacy ? <RiEyeCloseLine /> : <RxEyeOpen />}
        </button>
      </div>
    </>
  );
};

export default Controls;
