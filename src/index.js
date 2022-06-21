import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { createRoot } from 'react-dom/client'

import App from "./App";
// import './index.css'

import reducers from "./reducers/index";

const store = createStore(reducers, compose(applyMiddleware(thunk)));


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
