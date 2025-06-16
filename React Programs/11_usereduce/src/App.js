/* 
The useReducer hook in React is a powerful alternative to useState when dealing with complex state logic, especially when the next state depends on the previous one or when the state object is deeply nested or has multiple sub-values. 

=>syntax: const [state, dispatch] = useReducer(reducer, initialState);

=>Components of useReducer
1. reducer function: A pure function that takes the current state and an action, then returns the new state.
2. initialState: The initial value of the state.
3. dispatch function: Used to send an action to the reducer.


------------------------------------- USE REDUCER------------------------------------------
1. useReducer is a hook in React that offers more control over state operations compared to useState, especially for complex state logic.
2. Components: It involves two main components:
• Reducer: A pure function that takes the current state and an action and returns a new state.
• Action: An object describing what happened, typically having a type property.
3. Initialization: It's invoked as const [state, dispatch] = useReducer(reducer,initialState).
4. Dispatch: Actions are dispatched using the dispatch function, which invokes the reducer with the current state and the given action.
5. Use Cases: Particularly useful for managing state in large components or when the next state depends on the previous one.
6. Predictable State Management: Due to its strict structure, it leads to more predictable and maintainable state management.
*/

import "./App.css";
import { useReducer } from "react";
function App() {
  //this is pure function : reducer function which manages the state of the component and update it based on action dispatched by dispatch function.
  const dataReducer = (currentState, action) => {
    let updateData = currentState;
    if (action.type === "ADD_NEW_DATA") {
      //adding logic
      updateData = [...currentState, action.playload.newData];
    } else if (action.type === "DELETE_DATA") {
      //deleting logic
      updateData = currentState.filter(
        (data) => data !== action.playload.dataName
      );
    }
    return updateData;
  };

  const [newData, dispatch] = useReducer(dataReducer, [
    "karan",
    "kushal",
    "purn",
    "kirtan",
  ]);

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      //creating an action object.
      const addNewDataAction = {
        type: "ADD_NEW_DATA",
        playload: {
          newData: e.target.value,
        },
      };
      //dispatch the action object through dispatch function.
      dispatch(addNewDataAction);
      e.target.value = "";
    }
  };

  const handleOnClick = (dataName) => {
    //creating an action object.
    const deleteDataAction = {
      type: "DELETE_DATA",
      playload: {
        dataName: dataName,
      },
    };
    //dispatch the action object through dispatch function.
    dispatch(deleteDataAction);
  };

  return (
    <>
      <center>
        <h1>Data of employee</h1>
        <input
          id="input"
          type="text"
          placeholder="Enter a name"
          onKeyDown={handleOnKeyDown}
        />
        <ul className="list-group">
          {newData.map((item) => (
            <li key={item} className="list-group-item">
              {item}
              <button
                type="button"
                id="delBtn"
                onClick={() => {
                  handleOnClick(item);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </center>
    </>
  );
}
export default App;
