import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.jsx";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "./module";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
