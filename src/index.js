import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

//Our own middleWare
const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`Caught in the middleWare ${JSON.stringify(result)}`);
      return action; //This returns our action back to the reducer in order to update the state
    };
  };
};

const store = createStore(reducer, applyMiddleware(logAction)); //Applying middleWare from applyMiddleWare function

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
