//import the createSlice method from @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

/*
=>create a slice for specific functionality of UI
=>here this slice will change the counter value and re render the counter UI
=>syntax : 
createSlice({
 name : "---",
 intialState : ---,
 reducers: {
  multiple or single function and it's logic to change the state
 },
 })
 
=>every reducer get the state and action by default as parameter.using those parameter you can easily update the current state
 
 */

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    reset: (state) => {
      state.counterVal = 0;
    },
    addition: (state, action) => {
      if (action.payload == "") {
        state.counterVal = state.counterVal;
      } else {
        state.counterVal += parseInt(action.payload);
      }
    },
    subtract: (state, action) => {
      if (action.payload == "") {
        state.counterVal = state.counterVal;
      } else {
        state.counterVal -= parseInt(action.payload);
      }
    },
  },
});

//export the counterAction so we can use the methods/reducers of the counterSlice
export const counterAction = counterSlice.actions;
//export the counterSlice so we can use it inside the main store
export default counterSlice;
