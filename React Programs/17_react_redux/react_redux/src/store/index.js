import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    if (action.payload.value === "") {
      newStore = { ...store, counter: store.counter };
    } else {
      newStore = {
        ...store,
        counter: store.counter + parseInt(action.payload.value),
      };
    }
  } else if (action.type === "SUBTRACT") {
    if (action.payload.value === "") {
      newStore = { ...store, counter: store.counter };
    } else {
      newStore = {
        ...store,
        counter: store.counter - parseInt(action.payload.value),
      };
    }
  } else if (action.type === "PRIVACY_BUTTON") {
    newStore = { ...store, privacy: !store.privacy };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
