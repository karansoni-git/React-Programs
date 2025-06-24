import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import counterStore from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*import the Provide component from react-redux and use store attribute and assign the counterStore after importing from ./store */}
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
