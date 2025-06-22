const redux = require("redux");

const INTIAL_VALUE = {
  count: 0,
};

const reducer = (store = INTIAL_VALUE, action) => {
  //this action value shows for which type reducer is called
  //   console.log("action types :", action);
  let newStore = store;
  if (action.type == "INCREMENT") {
    newStore = { count: store.count + 1 };
  } else if (action.type == "DECREMENT") {
    newStore = { count: store.count - 1 };
  } else if (action.type == "ADDITION") {
    newStore = { count: store.count + action.payload.number };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const storeVal = store.getState();
  console.log(storeVal);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({
  type: "ADDITION",
  payload: {
    number: 10,
  },
});
